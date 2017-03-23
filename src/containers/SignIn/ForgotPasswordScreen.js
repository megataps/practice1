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

import CircleImageView from 'components/CircleImageView/CircleImageView';
import IconTextInput from 'components/IconTextInput/IconTextInput';
import validateWrapper from 'config/validationUtils';

import styles from './Styles';

// create a component
class ForgotPasswordScreen extends Component {

    constructor(props) {
        super(props);

         this.state = {
            email: '',
            emailError: ''
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
                underlayColor='#43ff3366'>
                <Text style={styles.button}>Send</Text>
            </TouchableHighlight>
        );
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
                                keyboardType='email-address'
                                returnKey='done'
                                returnKeyType={'done'}
                                placeholder='Email'
                                onBlur={() => {
                                    this.setState({
                                        emailError: validateWrapper('email', this.state.email)
                                    })
                                }}
                                error={this.state.emailError}
                            />
                        </View>

                        <View style={styles.verticalIndicator} />

                    </View>

                    <View style={styles.bottomBar}>
                        <Text style={styles.errorText}>
                            {this.props.error}
                        </Text>
                        {this.checkToRenderLoading()}
                    </View>
                    <KeyboardSpacer />
                </Image>
            </ScrollView>);
    }

        onSignInPress() {
        const emailErr = validateWrapper('email', this.state.email);
        console.log("DMMM >>> emailErr: " + emailErr);

        this.setState({
            emailError: emailErr
        })

        if (!emailErr) {
        }
    }
}

//make this component available to the app
export default ForgotPasswordScreen;
