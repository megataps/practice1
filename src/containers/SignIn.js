//import liraries
import React, { Component } from 'react';
import {
    View, Text, StyleSheet, Image, TextInput
} from 'react-native';

import CircleImageView from 'components/CircleImageView/CircleImageView';
import IconTextInput from 'components/IconTextInput/IconTextInput';

// create a component
class SignIn extends Component {
    render() {
        return (
            <Image style={styles.container}
                source={require('assets/images/bg_signin.png')}>

                <View style={styles.logo}>
                    <CircleImageView
                        imageLink={require('assets/images/check_red.png')}
                    />
                </View>

                <View style={styles.inputForm}>
                    <IconTextInput iconLink={require('assets/images/email.png')}
                        placeHolder='Email'/>
                    <IconTextInput iconLink={require('assets/images/password.png')}
                        placeHolder='Password'/>
                </View>

                <View style={styles.bottomBar}>

                </View>

            </Image>
        );
    }
}

// define your styles
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        width: null,
        height: null,
    },

    logo: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },

    inputForm: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    },

    bottomBar: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'blue',
    }

});

//make this component available to the app
export default SignIn;
