/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import {CopyOutlined, FilterOutlined} from '@ant-design/icons';
import {Checkbox, Menu} from 'antd';
import {
  DataTableDispatch,
  getSelectedItem,
  getSelectedItems,
  Selection,
} from './DataTableManager';
import React from 'react';
import {tryGetFlipperLibImplementation} from '../../plugin/FlipperLib';
import {DataTableColumn} from './DataTable';
import {toFirstUpper} from '../../utils/toFirstUpper';
import {DataSource} from '../../data-source/index';

const {Item, SubMenu} = Menu;

function defaultOnCopyRows<T>(items: T[]) {
  return JSON.stringify(items.length > 1 ? items : items[0], null, 2);
}

export function tableContextMenuFactory<T>(
  datasource: DataSource<T>,
  dispatch: DataTableDispatch<T>,
  selection: Selection,
  columns: DataTableColumn<T>[],
  visibleColumns: DataTableColumn<T>[],
  onCopyRows: (rows: T[]) => string = defaultOnCopyRows,
  onContextMenu?: (selection: undefined | T) => React.ReactElement,
) {
  const lib = tryGetFlipperLibImplementation();
  if (!lib) {
    return (
      <Menu>
        <Item>Menu not ready</Item>
      </Menu>
    );
  }
  const hasSelection = selection.items.size > 0 ?? false;
  return (
    <Menu>
      {onContextMenu
        ? onContextMenu(getSelectedItem(datasource, selection))
        : null}
      <SubMenu
        key="filter same"
        title="Filter on same"
        icon={<FilterOutlined />}
        disabled={!hasSelection}>
        {visibleColumns.map((column, idx) => (
          <Item
            key={column.key ?? idx}
            onClick={() => {
              dispatch({
                type: 'setColumnFilterFromSelection',
                column: column.key,
              });
            }}>
            {friendlyColumnTitle(column)}
          </Item>
        ))}
      </SubMenu>
      <SubMenu
        key="copy cells"
        title="Copy cell(s)"
        icon={<CopyOutlined />}
        disabled={!hasSelection}>
        {visibleColumns.map((column, idx) => (
          <Item
            key={column.key ?? idx}
            onClick={() => {
              const items = getSelectedItems(datasource, selection);
              if (items.length) {
                lib.writeTextToClipboard(
                  items.map((item) => '' + item[column.key]).join('\n'),
                );
              }
            }}>
            {friendlyColumnTitle(column)}
          </Item>
        ))}
      </SubMenu>
      <Item
        key="copyToClipboard"
        disabled={!hasSelection}
        onClick={() => {
          const items = getSelectedItems(datasource, selection);
          if (items.length) {
            lib.writeTextToClipboard(onCopyRows(items));
          }
        }}>
        Copy row(s)
      </Item>
      {lib.isFB && (
        <Item
          key="createPaste"
          disabled={!hasSelection}
          onClick={() => {
            const items = getSelectedItems(datasource, selection);
            if (items.length) {
              lib.createPaste(onCopyRows(items));
            }
          }}>
          Create paste
        </Item>
      )}
      <Menu.Divider />
      <SubMenu title="Visible columns" key="visible columns">
        {columns.map((column, idx) => (
          <Menu.Item key={column.key ?? idx}>
            <Checkbox
              checked={column.visible}
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                dispatch({type: 'toggleColumnVisibility', column: column.key});
              }}>
              {friendlyColumnTitle(column)}
            </Checkbox>
          </Menu.Item>
        ))}
      </SubMenu>
      <Menu.Item
        key="reset"
        onClick={() => {
          dispatch({type: 'reset'});
        }}>
        Reset view
      </Menu.Item>
    </Menu>
  );
}

function friendlyColumnTitle(column: DataTableColumn<any>): string {
  const name = column.title || column.key;
  return toFirstUpper(name);
}
