//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MenuScreen from 'Menu/MenuScreen';
import Drawer from 'react-native-drawer';
import HomeScreen from 'Home/HomeScreen';

// create a component
class MainScreen extends Component {
  state = {
    drawerOpen: false,
    drawerDisabled: false,
  };
  closeDrawer = () => {
    this._drawer.close()
  };
  openDrawer = () => {
    this._drawer.open()
  };
  render() {
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        type="static"
        content={
          <MenuScreen closeDrawer={this.closeDrawer} />
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
        <HomeScreen />
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
