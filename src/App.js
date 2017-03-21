import React, { Component } from 'react';
import { Actions, Scene, Router, ActionConst } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import configureStore from 'config/store';
import SignInScreen from 'containers/SignIn/SignInScreen';
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
            leftButtonImage={require('assets/images/menu.png')}
            onLeft={() => { }}
            type={ActionConst.REPLACE}>
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

        <Scene
            key="UserProfileScene"
            component={UserProfileScreen}
            title=""
            hideNavBar={false}
            type={ActionConst.PUSH} />


    </Scene>
);

sidebarButton = () => (
    <TouchableHighlight onPress={() => { Actions.refresh({ key: 'drawer', open: true }); }}>
        <Image source={require('assets/images/menu.png')} />
    </TouchableHighlight>
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
                    navigationBarStyle={{ backgroundColor: 'red', borderBottomColor: 'transparent' }}
                />
            </Provider>
        );
    }
}

                    // 
                    // 
                                        // renderLeftButton={this.sidebarButton}