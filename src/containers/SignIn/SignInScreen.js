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
                                isPassword={false}
                                keyboardType='email-address'
                                returnKey='next'
                                placeHolder='Email' />
                        </View>

                        <View style={styles.verticalIndicator}>
                        </View>

                        <View style={styles.input}>
                            <IconTextInput
                                ref='password'
                                onChangeText={(text) => this.setState({ password: text })}
                                iconUrI={require('assets/images/password.png')}
                                isPassword={true}
                                returnKey='done'
                                placeHolder='Password'
                                onSubmitEditing={this.onSignInPress.bind(this)} />
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
                            paddingBottom: 10,
                            alignItems: 'center',
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

                </Image>
            </ScrollView>);
    }

    onSignInPress() {
        this.props.onLogin({
            email: this.state.email,
            password: this.state.password
        });
    }

    onForgotPasswordPress() {
        Actions.ForgotPasswordScene();
    }

    onSignUpPress() {
        Actions.SignUpScene();
    }

    focusNextField(nextField) {
        // this.refs[nextField].focus();
        Alert.alert(nextField);
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
