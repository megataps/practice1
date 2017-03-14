//import liraries
import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    TextInput,
    TouchableHighlight,
    Alert,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { onLogin } from 'reducers/SignInReducer';

import CircleImageView from 'components/CircleImageView/CircleImageView';
import IconTextInput from 'components/IconTextInput/IconTextInput';

import styles from './Styles';

// create a component
class SignInScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
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
                onPress={this.onSignInPress}
                underlayColor='#43ff3366'>
                <Text style={styles.button}>Sign In</Text>
            </TouchableHighlight>
        );
    }

    render() {

        if (this.props.user) {
            Alert.alert('Login Success', `Welcome ${this.props.user.full_name}`);
        }

        return (
            <Image style={styles.container}
                source={require('assets/images/bg_signin.png')}>

                <View style={styles.logo}>
                    <CircleImageView
                        iconUrI={require('assets/images/check_red.png')}
                    />
                </View>

                <View style={styles.inputForm}>

                    <View style={styles.input}>
                        <IconTextInput
                            onChangeText={(text) => this.setState({ email: text })}
                            iconUrI={require('assets/images/user_name.png')}
                            isPassword={false}
                            placeHolder='Username' />
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

                    <View style={styles.verticalIndicator} />

                    <TouchableOpacity style={{ marginTop: 10, alignSelf: 'flex-end' }}>
                        <Text style={{ color: 'white' }}>Forgot Password</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.bottomBar}>
<<<<<<< HEAD:src/containers/SignIn/SignInScreen.js
                    <TouchableHighlight style={styles.signInButton}
                        onPress={this.onSignInPress.bind(this)}
=======
                    <Text style={styles.errorText}>
                        {this.props.error}
                    </Text>
                    {this.checkToRenderLoading()}
                    {/*<TouchableHighlight style={styles.signInButton}
                        onPress={this.onSignInPress}
>>>>>>> origin/master:src/containers/SignIn/SignIn.js
                        underlayColor='#43ff3366'>
                        <Text style={styles.button}>Sign In</Text>
                    </TouchableHighlight>*/}

                    <View style={
                        {
                            flex: 1,
                            paddingBottom: 20,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row'
                        }
                    }>
                        <Text style={{ color: 'white' }}>Don't have an account?</Text>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}
                            onPress={this.onSignUpPress.bind(this)}
                        > Sign Up</Text>
                    </View>
                </View>

            </Image>
        );
    }

    onSignInPress() {
<<<<<<< HEAD:src/containers/SignIn/SignInScreen.js
        this.props.onLogin({
            username: this.state.username,
=======
        // Alert.alert('username:' + this.state.email + 'password:' + this.state.password);
        this.props.login({
            email: this.state.email,
>>>>>>> origin/master:src/containers/SignIn/SignIn.js
            password: this.state.password
        });
    }

    onSignUpPress() {
        Actions.SignUpScene();
    }
}

// Map Redux state to component props
function mapStateToProps(state) {
    return {
        error: state.signInReducer.error,
        loading: state.signInReducer.loading,
        user: state.signInReducer.user
    }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        onLogin: (userCredentials) => dispatch(onLogin(userCredentials))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignInScreen);
