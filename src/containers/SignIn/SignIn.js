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
    TouchableOpacity
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
                            onChangeText={(text) => this.setState({ username: text })}
                            iconLink={require('assets/images/user_name.png')}
                            isPassword={false}
                            placeHolder='Username' />
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

                    <View style={styles.verticalIndicator} />

                    <TouchableOpacity style={{ marginTop: 10, alignSelf: 'flex-end' }}>
                        <Text style={{ color: 'white' }}>Forgot Password</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.bottomBar}>
                    <TouchableHighlight style={styles.signInButton}
                        onPress={this.onSignInPress.bind(this)}
                        underlayColor='#43ff3366'>
                        <Text style={styles.button}>Sign In</Text>
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
                        <Text style={{ color: 'white' }}>Don't have an account?</Text>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}
                            onPress= {this.onSignUpPress.bind(this)}
                        > Sign Up</Text>
                    </View>
                </View>

            </Image>
        );
    }

    onSignInPress() {
        Alert.alert('username:' + this.state.username + 'password:' + this.state.password);
    }

    onSignUpPress() {
        this.props.navigator.push({id: 2,});
    }
}

//make this component available to the app
export default SignIn;
