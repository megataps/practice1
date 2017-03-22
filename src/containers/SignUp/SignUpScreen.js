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
    Platform,
    ScrollView
} from 'react-native';

import DateTimePicker from 'react-native-modal-datetime-picker';
import KeyboardSpacer from 'react-native-keyboard-spacer';

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { onSignUp } from 'reducers/SignUpReducer';

import IconTextInput from 'components/IconTextInput/IconTextInput';
import styles from './Styles';

var alertDialg = (text) => { Alert.alert(text) };

Date.prototype.yyyymmdd = function () {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();
    return [this.getFullYear(),
    (mm > 9 ? '' : '0') + mm,
    (dd > 9 ? '' : '0') + dd
    ].join('-');
};

// create a component
class SignUpScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fullName: '',
            email: '',
            password: '',
            birthday: 'Birthday'
        };
    }

    state = {
        isDateTimePickerVisible: false,
    };

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        this.setState({ birthday: date.yyyymmdd() })
        this._hideDateTimePicker();
    };

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

    componentDidUpdate() {
        if (this.props.result) {
            Actions.pop();
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
                                returnKeyType={'next'}
                                blurOnSubmit={false}
                                onSubmitEditing={() => this.focusNextField('email')}
                                placeholder='Name' />
                        </View>

                        <View style={styles.verticalIndicator}>
                        </View>

                        <View style={styles.input}>
                            <IconTextInput
                                ref='email'
                                onChangeText={(text) => this.setState({ email: text })}
                                iconUrI={require('assets/images/email.png')}
                                returnKeyType={'next'}
                                keyboardType={'email-address'}
                                blurOnSubmit={false}
                                onSubmitEditing={() => this.focusNextField('password')}
                                placeholder='Email' />
                        </View>

                        <View style={styles.verticalIndicator}>
                        </View>

                        <View style={styles.input}>
                            <IconTextInput
                                ref='password'
                                onChangeText={(text) => this.setState({ password: text })}
                                iconUrI={require('assets/images/password.png')}
                                secureTextEntry={true}
                                returnKeyType={'next'}
                                blurOnSubmit={false}
                                placeholder='Password' />
                            {/*onSubmitEditing={() => this.focusNextField('birthday')}*/}
                        </View>

                        <View style={styles.verticalIndicator}>
                        </View>

                        <View style={styles.input}>
                            <TouchableOpacity
                                style={{ backgroundColor: 'transparent', alignItems: 'center' }}
                                onPress={this._showDateTimePicker}>

                                <View style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    height: 40,
                                }}>
                                    <Image
                                        style={{
                                            width: 21,
                                            height: 21,
                                            marginRight: 10,
                                            marginLeft: 5
                                        }}
                                        resizeMode='contain'
                                        source={require('assets/images/birthday.png')} />
                                    <Text style={{
                                        flex: 6,
                                        color: 'white',
                                    }}>{this.state.birthday}</Text>
                                </View>
                            </TouchableOpacity>
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
                    <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this._handleDatePicked}
                        onCancel={this._hideDateTimePicker}
                    />
                    <KeyboardSpacer />
                </Image>
            </ScrollView>
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
        result: state.signUpReducer.response
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
