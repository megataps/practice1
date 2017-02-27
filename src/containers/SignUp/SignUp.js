//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableHighlight, Alert } from 'react-native';

import IconTextInput from 'components/IconTextInput/IconTextInput';
import styles from './Styles';

// create a component
class SignUp extends Component {
    render() {
        return (
            <Image style={styles.container}
                source={require('assets/images/bg_signin.png')}>

                <View style={styles.logo}>

                    <Image
                        style={{alignSelf: 'flex-start', margin: 10, marginLeft: 15, width: 30, height: 20}}
                        source={require('assets/images/back.png')}
                        resizeMode='contain' />


                    <Text style={{ color: 'white', fontSize: 21, marginLeft: 15, marginTop: 20 }}>Sign Up </Text>
                </View>

                <View style={styles.inputForm}>

                    <View style={styles.input}>
                        <IconTextInput
                            onChangeText={(text) => this.setState({ username: text })}
                            iconLink={require('assets/images/user_name.png')}
                            isPassword={false}
                            placeHolder='Name' />
                    </View>

                    <View style={styles.verticalIndicator}>
                    </View>

                    <View style={styles.input}>
                        <IconTextInput
                            onChangeText={(text) => this.setState({ username: text })}
                            iconLink={require('assets/images/email.png')}
                            isPassword={false}
                            placeHolder='Email' />
                    </View>

                    <View style={styles.verticalIndicator}>
                    </View>

                    <View style={styles.input}>
                        <IconTextInput
                            onChangeText={(text) => this.setState({ password: text })}
                            iconLink={require('assets/images/password.png')}
                            isPassword={true}
                            placeHolder='Password' />
                    </View>

                    <View style={styles.verticalIndicator}>
                    </View>

                    <View style={styles.input}>
                        <IconTextInput
                            onChangeText={(text) => this.setState({ username: text })}
                            iconLink={require('assets/images/birthday.png')}
                            isPassword={false}
                            placeHolder='Birthday' />
                    </View>

                    <View style={styles.verticalIndicator} />

                </View>

                <View style={styles.bottomBar}>
                    <TouchableHighlight style={styles.signInButton}
                        onPress={this.onSignInPress.bind(this)}
                        underlayColor='#43ff3366'>
                        <Text style={styles.button}>Join</Text>
                    </TouchableHighlight>

                    <View style={
                        {
                            flex: 1,
                            paddingBottom: 20,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row'
                        }
                    }>
                        <Text style={{ color: 'white' }}>Already have an account? </Text>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}> Sign In</Text>
                    </View>
                </View>

            </Image>
        );
    }

    onSignInPress() {
        Alert.alert('Sign up pressed');
    }
}

//make this component available to the app
export default SignUp;
