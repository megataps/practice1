//import liraries
import React, { Component } from 'react';
import {
    View, StyleSheet, Text, Image, TextInput, TouchableHighlight, Alert
} from 'react-native';

import CircleImageView from 'components/CircleImageView/CircleImageView';
import IconTextInput from 'components/IconTextInput/IconTextInput';

import styles from './Styles';

// create a component
class SignIn extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };
    }

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

                    <View style={styles.input}>
                        <IconTextInput
                            onChangeText={(text) => this.setState({ text })}
                            iconLink={require('assets/images/email.png')}
                            placeHolder='Username' />
                    </View>

                    <View style={styles.verticalIndicator}>
                    </View>

                    <View style={styles.input}>
                        <IconTextInput iconLink={require('assets/images/password.png')}
                            placeHolder='Password' />
                    </View>

                    <View style={styles.verticalIndicator} />

                    <View style={{ marginTop: 10, alignSelf: 'flex-end' }}>
                        <Text style={{ color: 'white' }}>Forgot Password</Text>
                    </View>

                </View>

                <View style={styles.bottomBar}>
                    <TouchableHighlight style={styles.signInButton}
                        onPress={this.onSignInPress}>
                        <Text style={styles.button}>Sign In</Text>
                    </TouchableHighlight>

                    <View style={
                        {
                            flex: 1,
                            paddingBottom: 20,
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                        }
                    }>
                        <Text style={{ color: 'white' }}>Don't have an account? Sign Up</Text>
                    </View>
                </View>

            </Image>
        );
    }

    onSignInPress(event) {
        Alert.alert('Button has been pressed!');
    }
}

//make this component available to the app
export default SignIn;
