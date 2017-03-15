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
    ActivityIndicator,
    Platform
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { onSignUp } from 'reducers/SignUpReducer';

import IconTextInput from 'components/IconTextInput/IconTextInput';
import styles from './Styles';

var alertDialg = (text) => { Alert.alert(text) };

// create a component
class SignUpScreen extends Component {

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

    componentDidUpdate(){
         if (this.props.user) {
             Actions.pop();
         }
    }

    render() {
        return (
            <Image style={styles.container}
                source={require('assets/images/bg_signin.png')}>

                <View style={styles.logo}>
                    <Text style={{
                        color: 'white',
                        backgroundColor: '#00000000',
                        fontSize: 21,
                        marginLeft: 15,
                        marginTop: (Platform.OS === 'ios') ? 80 : 40
                    }}>Sign Up </Text>
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
                        <Text style={{ color: 'white', backgroundColor: '#00000000', }}>Already have an account? </Text>
                        <TouchableOpacity onPress={this.onSignInPress.bind(this)}>
                            <Text style={{ color: 'white', fontWeight: 'bold', backgroundColor: '#00000000', }}> Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </Image>
        );
    }

    onSignUpPress() {
        this.props.onSignUp({
            fullName: this.state.fullName,
            email: this.state.email,
            password: this.state.password,
            birthday: this.state.birthday,
            token: 'abcxyzwendsjkfjdsklfjkds'
        });
    }

    onSignInPress() {
        Actions.pop();
    }
}

// //make this component available to the app
// export default SignUpScreen;

// Map Redux state to component props
function mapStateToProps(state) {
    return {
        error: state.signUpReducer.error,
        loading: state.signUpReducer.loading,
        user: state.signUpReducer.user
    }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        onSignUp: (userInfo) => dispatch(onSignUp(userInfo))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpScreen);
