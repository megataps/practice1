//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import MenuScreen from 'Menu/MenuScreen';
import Drawer from 'react-native-drawer';
import HomeScreen from 'Home/HomeScreen';
import { Actions, DefaultRenderer } from 'react-native-router-flux';

// create a component
class MainScreen extends Component {
  state = {
    drawerOpen: false,
    drawerDisabled: false,
  };

  closeDrawer = () => {
    this._drawer.close()
    // Alert.alert('Closing.......');
  };

  openDrawer = () => {
    this._drawer.open()
  };

  onLogout = () => {
    // Alert.alert('Logout.......');
    Actions.SignInScene();
    this._drawer.close()
  };

  onProfile = () => {
    Actions.HomeScene();
    this._drawer.close()
  };

  onAbout = () => {
    Actions.AboutScene();
    this._drawer.close()
  };

  onSetting = () => {
    Alert.alert('Setting.......');
  };

  render() {
    const state = this.props.navigationState;
    const children = state.children;

    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        type="static"
        content={
          <MenuScreen
            closeDrawer={this.closeDrawer}
            onLogout={this.onLogout}
            onProfile={this.onProfile}
            onAbout={this.onAbout}
            onSetting={this.onSetting} />
        }
        acceptDoubleTap
        styles={{ main: { shadowColor: '#000000', shadowOpacity: 0.3, shadowRadius: 15 } }}
        onOpen={() => {
          console.log('onopen')
          this.setState({ drawerOpen: true })
        }}
        onClose={() => {
          console.log('onclose')
          this.setState({ drawerOpen: false })
        }}
        captureGestures={false}
        tweenDuration={100}
        panThreshold={0.08}
        disabled={this.state.drawerDisabled}
        openDrawerOffset={(viewport) => {
          return 100
        }}
        closedDrawerOffset={() => 0}
        panOpenMask={0.5}
        negotiatePan
      >
         <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
      </Drawer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  }
})

//make this component available to the app
export default MainScreen;
