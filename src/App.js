import React, { Component } from 'react';
import { Actions, Scene, Router, ActionConst } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import configureStore from 'config/store';
import SignInScreen from 'containers/SignIn/SignInScreen'
import SignUpScreen from 'containers/SignUp/SignUpScreen'
import MainScreen from 'containers/Main/MainScreen'
import UserProfileScreen from 'containers/Profile/UserProfileScreen'

import routes, { listRoutes } from 'config/routes';

const store = configureStore();

const scenes = Actions.create(
    <Scene key="root">
        <Scene
            key="SignInScene"
            component={SignInScreen}
            initial={true}
            hideNavBar={true} />
        <Scene
            key="SignUpScene"
            component={SignUpScreen}
            title=""
            hideNavBar={false}
            type={ActionConst.PUSH} />
        <Scene
            key="MainScene"
            component={MainScreen}
            title=""
            hideNavBar={true}
            type={ActionConst.REPLACE} />

        <Scene
            key="UserProfileScene"
            component={UserProfileScreen}
            title=""
            hideNavBar={false}
            type={ActionConst.PUSH} />
    </Scene>
);

export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <Router
                    scenes={scenes}
                    titleStyle={{ color: 'white' }} backButtonImage={require('assets/images/back.png')}
                    navigationBarStyle={{ backgroundColor: 'transparent', borderBottomColor: 'transparent' }}
                />
            </Provider>
        );
    }
}