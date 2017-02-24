//import liraries
import React, { Component } from 'react';
import {
    View, StyleSheet, Text, Image, TextInput, Button, Alert
} from 'react-native';

import CircleImageView from 'components/CircleImageView/CircleImageView';
import IconTextInput from 'components/IconTextInput/IconTextInput';

// create a component
class SignIn extends Component {

    constructor(props) {
        super(props);

        this.state = { 
            username: '',
            password: '' };
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
                            onChangeText={(text) => this.setState({text})}
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
                    <View style={styles.signInButton}>
                        <Button
                            title='Sign In'
                            color='#ff3366'
                            on onPress={this.onSignInPress.bind(this)} />
                    </View>

                    <View style={{ paddingBottom: 20, paddingTop: 20, alignItems: 'center' }}>
                        <Text style={{ color: 'white' }}>Don't have an account? Sign Up</Text>
                    </View>
                </View>

            </Image>
        );
    }

    onSignInPress(event) {
        Alert.alert('Button has been pressed!' + this.state.username);
    }

}

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
        paddingLeft: 25,
        paddingRight: 25,
    },

    input: {
        alignItems: 'center',
        height: 50,
    },

    verticalIndicator: {
        height: 1,
        width: 1000,
        alignItems: 'center',
        backgroundColor: 'gray',
    },

    bottomBar: {
        flex: 1,
    },

    signInButton: {
        flex: 2,
        justifyContent: 'flex-end',
        shadowOpacity: 0
    }

});

//make this component available to the app
export default SignIn;
