import React, { Component } from 'react';
import { Actions, Scene, Router, ActionConst } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import store from 'config/store';
import SignIn from 'containers/SignIn/SignIn'
import SignUp from 'containers/SignUp/SignUp'

import routes, { listRoutes } from 'config/routes';

const scenes = Actions.create(
    <Scene key="root">
        <Scene
            key="SignIn"
            component={SignIn}
            initial={true}
            hideNavBar={true} />
        <Scene
            key="SignUp"
            component={SignUp}
            title="Sign Up"
            hideNavBar={false}
            type={ActionConst.PUSH}
        />
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

    /*render() {
        return (<Router>
            <Scene key="root">
                <Scene key="signin"
                    renderTitle={false}
                    component={SignIn}
                    title=""
                    initial={true}
                    hideNavBar={true}
                />
                <Scene key="signup"
                    component={SignUp}
                    title=""
                    hideNavBar={false}
                    navigationBarStyle={
                        {
                            backgroundColor: 'transparent',
                            borderBottomWidth: 0
                        }
                    }
                    backButtonImage={require('practice1/src/assets/images/back.png')}
                />
            </Scene>
        </Router>);
    }*/
}