import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import SignIn from 'containers/SignIn/SignIn'
import SignUp from 'containers/SignUp/SignUp'

export default class App extends React.Component {

    render() {
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
    }
}