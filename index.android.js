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

import SignIn from 'containers/SignIn'

export default class practice1 extends Component {
  render() {
    return (
        <SignIn />
    );
  }
}

AppRegistry.registerComponent('practice1', () => practice1);
