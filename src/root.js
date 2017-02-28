//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator, NavigationBar, Image } from 'react-native';
import SignIn from 'containers/SignIn/SignIn'
import SignUp from 'containers/SignUp/SignUp'

var SCREEN_WIDTH = require('Dimensions').get('window').width;
var BaseConfig = Navigator.SceneConfigs.FloatFromRight;

var CustomLeftToRightGesture = Object.assign({}, BaseConfig.gestures.pop, {
    // Make it snap back really quickly after canceling pop
    snapVelocity: 8,
    // Make it so we can drag anywhere on the screen
    edgeHitWidth: SCREEN_WIDTH,
});

var CustomSceneConfig = Object.assign({}, BaseConfig, {
    // A very tighly wound spring will make this transition fast
    springTension: 100,
    springFriction: 1,
    // Use our custom gesture defined above
    gestures: {
        pop: CustomLeftToRightGesture,
    }
});

// create a component
class Root extends Component {

    _renderScene(route, navigator) {
        if (route.id === 1) {
            return <SignIn navigator={navigator} />
        } else if (route.id === 2) {
            return <SignUp navigator={navigator} />
        }
    }

    _configureScene(route) {
        return CustomSceneConfig;
    }

    render() {
        return (
            <Navigator
                initialRoute={{ id: 1, }}
                renderScene={this._renderScene}
                configureScene={this._configureScene}
                navigationBar={
                    <Navigator.NavigationBar
                        routeMapper={{
                            LeftButton: (route, navigator, index, navState) => {
                                if (route.id === 2) {
                                    return (
                                        <Image
                                            style={{alignSelf: 'flex-start', margin: 10, marginLeft: 15, width: 30, height: 20}}
                                            resizeMode='contain'
                                            source={require('practice1/src/assets/images/back.png')} />);
                                } else {
                                    return (<Text></Text>);
                                }
                            },
                            RightButton: (route, navigator, index, navState) => {
                                return (<Text></Text>);
                            },
                            Title: (route, navigator, index, navState) => {
                                return (<Text></Text>);
                            },
                        }}
                        style={{ backgroundColor: 'transparent' }}
                    />

                }
            />
        );
    }
}

/*navigationBar={
    <Navigator.NavigationBar
        routeMapper={{
            LeftButton: (route, navigator, index, navState) => {
                return (
                    <Image
                        resizeMode='contain'
                        source={'practice1/src/assets/images/back.png'} />);
            },
            RightButton: (route, navigator, index, navState) => {
                return (<Text></Text>);
            },
            Title: (route, navigator, index, navState) => {
                return (<Text></Text>);
            },
        }}
        style={{ backgroundColor: 'transparent' }}
    />

}*/

//make this component available to the app
export default Root;
