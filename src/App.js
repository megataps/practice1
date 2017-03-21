import React, { Component } from 'react';
import { Actions, Scene, Router, ActionConst } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import configureStore from 'config/store';
import SignInScreen from 'containers/SignIn/SignInScreen';
import ForgotPasswordScreen from 'containers/SignIn/ForgotPasswordScreen';
import SignUpScreen from 'containers/SignUp/SignUpScreen';
import MainScreen from 'containers/Main/MainScreen';
import UserProfileScreen from 'containers/Profile/UserProfileScreen';
import AboutScreen from 'containers/About/AboutScreen';
import HomeScreen from 'containers/Home/HomeScreen';

import routes, { listRoutes } from 'config/routes';

const store = configureStore();

const scenes = Actions.create(
    <Scene key="root">
        <Scene
            key="SignInScene"
            component={SignInScreen}
            initial={true}
            hideNavBar={false}
            type={ActionConst.REPLACE}
        />

        <Scene
            key="ForgotPasswordScene"
            component={ForgotPasswordScreen}
            title=""
            hideNavBar={false}
            type={ActionConst.PUSH}
        />

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
            hideNavBar={false}
            type={ActionConst.REPLACE}>
            <Scene
                key="drawerRoot">
                <Scene
                    key="HomeScene"
                    component={HomeScreen}
                    title=""
                    type={ActionConst.REPLACE}
                    hideNavBar={false} />

                <Scene
                    key="AboutScene"
                    component={AboutScreen}
                    title=""
                    type={ActionConst.REPLACE}
                    hideNavBar={false} />
            </Scene>
        </Scene>
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
                    titleStyle={{ color: 'white' }}
                    backButtonImage={require('assets/images/back.png')}
                    navigationBarStyle={{ backgroundColor: 'transparent', borderBottomColor: 'transparent' }}
                    leftButtonIconStyle={{ paddingLeft: 0, marginLeft: 0, width: 20, height: 20 }}
                    drawerImage={require('assets/images/menu.png')}
                />
            </Provider>
        );
    }
}