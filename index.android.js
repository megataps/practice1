/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
} from 'react-native';

import {
  Scene,
  Reducer,
  Router,
  Switch,
  Modal,
  Actions,
  ActionConst,
} from 'react-native-router-flux';

import App from './src/App'


export default class practice1 extends Component {
  render() {
    return (
        <App />
    );
  }
}

AppRegistry.registerComponent('practice1', () => practice1);
