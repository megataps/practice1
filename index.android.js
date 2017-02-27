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

// import SignIn from 'containers/SignIn'
import Root from './src/root'


export default class practice1 extends Component {
  render() {
    return (
        <Root />
    );
  }
}

AppRegistry.registerComponent('practice1', () => practice1);
