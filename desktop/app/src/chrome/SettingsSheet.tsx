/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import {FlexColumn, Button, styled, Text, FlexRow, Spacer} from '../ui';
import React, {Component, useContext} from 'react';
import {updateSettings, Action} from '../reducers/settings';
import {
  Action as LauncherAction,
  LauncherSettings,
  updateLauncherSettings,
} from '../reducers/launcherSettings';
import {connect} from 'react-redux';
import {State as Store} from '../reducers';
import {Settings, DEFAULT_ANDROID_SDK_PATH} from '../reducers/settings';
import {flush} from '../utils/persistor';
import ToggledSection from './settings/ToggledSection';
import {FilePathConfigField, ConfigText} from './settings/configFields';
import KeyboardShortcutInput from './settings/KeyboardShortcutInput';
import {isEqual, isMatch, isEmpty} from 'lodash';
import restartFlipper from '../utils/restartFlipper';
import LauncherSettingsPanel from '../fb-stubs/LauncherSettingsPanel';
import SandySettingsPanel from '../fb-stubs/SandySettingsPanel';
import {reportUsage} from '../utils/metrics';
import {Modal, message} from 'antd';
import {Layout, withTrackingScope, _NuxManagerContext} from 'flipper-plugin';
import GK from '../fb-stubs/GK';
import ReleaseChannel from '../ReleaseChannel';

const Container = styled(FlexColumn)({
  padding: 20,
  width: 800,
});

const Title = styled(Text)({
  marginBottom: 18,
  marginRight: 10,
  fontWeight: 100,
  fontSize: '40px',
});

type OwnProps = {
  useSandy?: boolean;
  onHide: () => void;
  platform: NodeJS.Platform;
};

type StateFromProps = {
  settings: Settings;
  launcherSettings: LauncherSettings;
  isXcodeDetected: boolean;
};

type DispatchFromProps = {
  updateSettings: (settings: Settings) => Action;
  updateLauncherSettings: (settings: LauncherSettings) => LauncherAction;
};

type State = {
  updatedSettings: Settings;
  updatedLauncherSettings: LauncherSettings;
  forcedRestartSettings: Partial<Settings>;
  forcedRestartLauncherSettings: Partial<LauncherSettings>;
};

type Props = OwnProps & StateFromProps & DispatchFromProps;
class SettingsSheet extends Component<Props, State> {
  state: State = {
    updatedSettings: {...this.props.settings},
    updatedLauncherSettings: {...this.props.launcherSettings},
    forcedRestartSettings: {},
    forcedRestartLauncherSettings: {},
  };

  componentDidMount() {
    reportUsage('settings:opened');
  }

  applyChanges = async () => {
    this.props.updateSettings(this.state.updatedSettings);
    this.props.updateLauncherSettings(this.state.updatedLauncherSettings);
    this.props.onHide();
    flush().then(() => {
      restartFlipper(true);
    });
  };

  applyChangesWithoutRestart = async () => {
    this.props.updateSettings(this.state.updatedSettings);
    this.props.updateLauncherSettings(this.state.updatedLauncherSettings);
    await flush();
    this.props.onHide();
  };

  renderSandyContainer(
    contents: React.ReactElement,
    footer: React.ReactElement,
  ) {
    return (
      <Modal
        visible
        onCancel={this.props.onHide}
        width={570}
        title="Settings"
        footer={footer}>
        <FlexColumn>{contents}</FlexColumn>
      </Modal>
    );
  }

  renderNativeContainer(
    contents: React.ReactElement,
    footer: React.ReactElement,
  ) {
    return (
      <Container>
        <Title>Settings</Title>
        {contents}
        <br />
        <FlexRow>
          <Spacer />
          {footer}
        </FlexRow>
      </Container>
    );
  }

  render() {
    const {
      enableAndroid,
      androidHome,
      enableIOS,
      enablePhysicalIOS,
      enablePrefetching,
      idbPath,
      reactNative,
      disableSandy,
      darkMode,
    } = this.state.updatedSettings;

    const {releaseChannel} = this.state.updatedLauncherSettings;

    const {useSandy} = this.props;

    const settingsPristine =
      isEqual(this.props.settings, this.state.updatedSettings) &&
      isEqual(this.props.launcherSettings, this.state.updatedLauncherSettings);

    const forcedRestart =
      (!isEmpty(this.state.forcedRestartSettings) &&
        !isMatch(this.props.settings, this.state.forcedRestartSettings)) ||
      (!isEmpty(this.state.forcedRestartLauncherSettings) &&
        !isMatch(
          this.props.launcherSettings,
          this.state.forcedRestartLauncherSettings,
        ));

    const contents = (
      <Layout.Container gap>
        <ToggledSection
          label="Android Developer"
          toggled={enableAndroid}
          onChange={(v) => {
            this.setState({
              updatedSettings: {
                ...this.state.updatedSettings,
                enableAndroid: v,
              },
            });
          }}>
          <FilePathConfigField
            label="Android SDK location"
            resetValue={DEFAULT_ANDROID_SDK_PATH}
            defaultValue={androidHome}
            onChange={(v) => {
              this.setState({
                updatedSettings: {
                  ...this.state.updatedSettings,
                  androidHome: v,
                },
              });
            }}
          />
        </ToggledSection>
        <ToggledSection
          label="iOS Developer"
          toggled={enableIOS && this.props.platform === 'darwin'}
          onChange={(v) => {
            this.setState({
              updatedSettings: {...this.state.updatedSettings, enableIOS: v},
            });
          }}>
          {' '}
          {this.props.platform === 'darwin' && (
            <ConfigText
              content={'Use "xcode-select" to switch between Xcode versions'}
            />
          )}
          {this.props.platform !== 'darwin' && (
            <ConfigText
              content={
                'iOS development has limited functionality on non-MacOS devices'
              }
            />
          )}
          <ToggledSection
            label="Enable physical iOS devices"
            toggled={enablePhysicalIOS}
            frozen={false}
            onChange={(v) => {
              this.setState({
                updatedSettings: {
                  ...this.state.updatedSettings,
                  enablePhysicalIOS: v,
                },
              });
            }}>
            <FilePathConfigField
              label="IDB binary location"
              defaultValue={idbPath}
              isRegularFile={true}
              onChange={(v) => {
                this.setState({
                  updatedSettings: {...this.state.updatedSettings, idbPath: v},
                });
              }}
            />
          </ToggledSection>
        </ToggledSection>
        <LauncherSettingsPanel
          isPrefetchingEnabled={enablePrefetching}
          onEnablePrefetchingChange={(v) => {
            this.setState({
              updatedSettings: {
                ...this.state.updatedSettings,
                enablePrefetching: v,
              },
            });
          }}
          isLocalPinIgnored={this.state.updatedLauncherSettings.ignoreLocalPin}
          onIgnoreLocalPinChange={(v) => {
            this.setState({
              updatedLauncherSettings: {
                ...this.state.updatedLauncherSettings,
                ignoreLocalPin: v,
              },
            });
          }}
          releaseChannel={this.state.updatedLauncherSettings.releaseChannel}
          onReleaseChannelChange={(v) => {
            this.setState({
              updatedLauncherSettings: {
                ...this.state.updatedLauncherSettings,
                releaseChannel: v,
              },
              forcedRestartLauncherSettings: {
                ...this.state.forcedRestartLauncherSettings,
                releaseChannel: v,
              },
            });
          }}
        />
        <SandySettingsPanel
          toggled={this.state.updatedSettings.disableSandy}
          onChange={(v) => {
            this.setState({
              updatedSettings: {
                ...this.state.updatedSettings,
                disableSandy: v,
              },
              forcedRestartSettings: {
                ...this.state.forcedRestartSettings,
                disableSandy: v,
              },
            });
          }}
        />
        {(GK.get('flipper_sandy') ||
          releaseChannel == ReleaseChannel.INSIDERS) &&
          !disableSandy && (
            <ToggledSection
              label="Enable dark theme (experimental)"
              toggled={darkMode}
              onChange={(enabled) => {
                this.setState((prevState) => ({
                  updatedSettings: {
                    ...prevState.updatedSettings,
                    darkMode: enabled,
                  },
                }));
              }}
            />
          )}
        <ToggledSection
          label="React Native keyboard shortcuts"
          toggled={reactNative.shortcuts.enabled}
          onChange={(enabled) => {
            this.setState((prevState) => ({
              updatedSettings: {
                ...prevState.updatedSettings,
                reactNative: {
                  ...prevState.updatedSettings.reactNative,
                  shortcuts: {
                    ...prevState.updatedSettings.reactNative.shortcuts,
                    enabled,
                  },
                },
              },
            }));
          }}>
          <KeyboardShortcutInput
            label="Reload application"
            value={reactNative.shortcuts.reload}
            onChange={(reload) => {
              this.setState((prevState) => ({
                updatedSettings: {
                  ...prevState.updatedSettings,
                  reactNative: {
                    ...prevState.updatedSettings.reactNative,
                    shortcuts: {
                      ...prevState.updatedSettings.reactNative.shortcuts,
                      reload,
                    },
                  },
                },
              }));
            }}
          />
          <KeyboardShortcutInput
            label="Open developer menu"
            value={reactNative.shortcuts.openDevMenu}
            onChange={(openDevMenu) => {
              this.setState((prevState) => ({
                updatedSettings: {
                  ...prevState.updatedSettings,
                  reactNative: {
                    ...prevState.updatedSettings.reactNative,
                    shortcuts: {
                      ...prevState.updatedSettings.reactNative.shortcuts,
                      openDevMenu,
                    },
                  },
                },
              }));
            }}
          />
        </ToggledSection>
        <Layout.Right center>
          <span>Reset all new user tooltips</span>
          <ResetTooltips />
        </Layout.Right>
        <Layout.Right center>
          <span>Reset all local storage based state</span>
          <ResetLocalState />
        </Layout.Right>
      </Layout.Container>
    );

    const footer = (
      <>
        <Button compact padded onClick={this.props.onHide}>
          Cancel
        </Button>
        <Button
          disabled={settingsPristine || forcedRestart}
          compact
          padded
          onClick={this.applyChangesWithoutRestart}>
          Apply
        </Button>
        <Button
          disabled={settingsPristine}
          type="primary"
          compact
          padded
          onClick={this.applyChanges}>
          Apply and Restart
        </Button>
      </>
    );

    return useSandy
      ? this.renderSandyContainer(contents, footer)
      : this.renderNativeContainer(contents, footer);
  }
}

export default connect<StateFromProps, DispatchFromProps, OwnProps, Store>(
  ({settingsState, launcherSettingsState, application}) => ({
    settings: settingsState,
    launcherSettings: launcherSettingsState,
    isXcodeDetected: application.xcodeCommandLineToolsDetected,
  }),
  {updateSettings, updateLauncherSettings},
)(withTrackingScope(SettingsSheet));

function ResetTooltips() {
  const nuxManager = useContext(_NuxManagerContext);

  return (
    <Button
      onClick={() => {
        nuxManager.resetHints();
      }}>
      Reset hints
    </Button>
  );
}

function ResetLocalState() {
  return (
    <Button
      type="danger"
      onClick={() => {
        window.localStorage.clear();
        message.success('Local storage state cleared');
      }}>
      Reset all state
    </Button>
  );
}
