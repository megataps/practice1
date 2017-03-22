//import liraries
import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    Text,
    Image,
    TextInput,
    TouchableHighlight,
    Alert,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';

import KeyboardSpacer from 'react-native-keyboard-spacer';

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { onLogin } from 'reducers/SignInReducer';

import CircleImageView from 'components/CircleImageView/CircleImageView';
import IconTextInput from 'components/IconTextInput/IconTextInput';

import styles from './Styles';
import validateWrapper from 'config/validationUtils';

// create a component
class SignInScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            emailError: '',
            password: '',
            passwordError: ''
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
                onPress={this.onSignInPress.bind(this)}
                underlayColor='#43ff3366'>
                <Text style={styles.button}>Sign In</Text>
            </TouchableHighlight>
        );
    }

    componentDidUpdate() {
        if (this.props.user) {
            Actions.MainScene();
        }
    }

    focusNextField(nextField) {
        this.refs[nextField].refs.TextInput.focus();
    }

    render() {
        return (
            <ScrollView
                scrollEnabled={false}>
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
                                iconUrI={require('assets/images/email.png')}
                                keyboardType={'email-address'}
                                returnKeyType={'next'}
                                placeholder={'Email'}
                                blurOnSubmit={false}
                                onSubmitEditing={() => this.focusNextField('password')}
                                error={this.state.emailError}
                            />
                        </View>

                        <View style={styles.verticalIndicator}>
                        </View>

                        <View style={styles.input}>
                            <IconTextInput
                                ref='password'
                                onChangeText={(text) => this.setState({ password: text })}
                                iconUrI={require('assets/images/password.png')}
                                secureTextEntry={true}
                                returnKeyType={'done'}
                                placeholder='Password'
                                onSubmitEditing={this.onSignInPress.bind(this)}
                                error={this.state.passwordError}
                            />
                        </View>

                        <View style={styles.verticalIndicator} />

                        <TouchableOpacity style={{ marginTop: 10, alignSelf: 'flex-end', backgroundColor: '#00000000' }}
                            onPress={this.onForgotPasswordPress.bind(this)}>
                            <Text style={{ color: 'white' }}>Forgot Password</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.bottomBar}>
                        <Text style={styles.errorText}>
                            {this.props.error}
                        </Text>
                        {this.checkToRenderLoading()}
                        <View style={{
                            flex: 1,
                            paddingBottom: 20,
                            alignItems: 'flex-end',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            backgroundColor: '#00000000'
                        }}>
                            <Text style={{ color: 'white' }}>Don't have an account?</Text>
                            <TouchableOpacity onPress={this.onSignUpPress.bind(this)}>
                                <Text style={{ color: 'white', fontWeight: 'bold' }}> Sign Up</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                    <KeyboardSpacer />

                </Image>
            </ScrollView>);
    }

    onSignInPress() {
        const emailErr = validateWrapper('email', this.state.email);
        const passwordErr = validateWrapper('password', this.state.password);
        console.log("DMMM >>> emailErr: "+ emailErr);
        console.log("DMMM >>> passwordErr: "+ passwordErr);

        this.setState({
            emailError: emailErr,
            passwordError: passwordErr
        })

        if (!emailErr && !passwordErr) {
            this.props.onLogin({
                email: this.state.email,
                password: this.state.password
            });
        }
    }

    onForgotPasswordPress() {
        Actions.ForgotPasswordScene();
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
