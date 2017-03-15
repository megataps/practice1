//import liraries
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    Alert,
    ActivityIndicator
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import IconTextInput from 'components/IconTextInput/IconTextInput';
import styles from './Styles';

// create a component
class UserProfileScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fullName: '',
            email: '',
            password: '',
            birthday: ''
        };
    }

    checkToRenderLoading() {
        if (this.props.loading) {
            return (
                <ActivityIndicator
                    style={[styles.loader]}
                    color='white'
                    size='large' />
            );
        }
        return (
            <TouchableHighlight
                style={styles.signInButton}
                onPress={this.onSignUpPress.bind(this)}
                underlayColor='#43ff3366'>
                <Text style={styles.button}>Join</Text>
            </TouchableHighlight>
        );
    }


    render() {
        return (
            <Image style={styles.container}
                source={require('assets/images/bg_signin.png')}>

                <View style={styles.logo}>

                    <Text style={{ color: 'white', fontSize: 21, marginLeft: 15, marginTop: 40 }}>Sign Up </Text>
                </View>

                <View style={styles.inputForm}>

                    <View style={styles.input}>
                        <IconTextInput
                            onChangeText={(text) => this.setState({ fullName: text })}
                            iconUrI={require('assets/images/user_name.png')}
                            isPassword={false}
                            placeHolder='Name' />
                    </View>

                    <View style={styles.verticalIndicator}>
                    </View>

                    <View style={styles.input}>
                        <IconTextInput
                            onChangeText={(text) => this.setState({ email: text })}
                            iconUrI={require('assets/images/email.png')}
                            isPassword={false}
                            placeHolder='Email' />
                    </View>

                    <View style={styles.verticalIndicator}>
                    </View>

                    <View style={styles.input}>
                        <IconTextInput
                            onChangeText={(text) => this.setState({ password: text })}
                            iconUrI={require('assets/images/password.png')}
                            isPassword={true}
                            placeHolder='Password' />
                    </View>

                    <View style={styles.verticalIndicator}>
                    </View>

                    <View style={styles.input}>
                        <IconTextInput
                            onChangeText={(text) => this.setState({ birthday: text })}
                            iconUrI={require('assets/images/birthday.png')}
                            isPassword={false}
                            placeHolder='Birthday' />
                    </View>

                    <View style={styles.verticalIndicator} />

                </View>

                <View style={styles.bottomBar}>

                    <Text style={styles.errorText}>
                        {this.props.error}
                    </Text>

                    {this.checkToRenderLoading()}

                    <View style={{
                        flex: 1,
                        paddingBottom: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row'
                    }}>
                        <Text style={{ color: 'white' }}>Already have an account? </Text>
                        <TouchableOpacity onPress={this.onSignInPress.bind(this)}>
                            <Text style={{ color: 'white', fontWeight: 'bold' }}> Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </Image>
        );
    }

    onSignUpPress() {
        Alert.alert('Sign In pressed');
    }

    onSignInPress() {
        alertDialg('Sign In pressed');
    }
}

//make this component available to the app
export default UserProfileScreen;
