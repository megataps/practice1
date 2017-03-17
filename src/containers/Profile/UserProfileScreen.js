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


    render() {
        return (
            <Image style={styles.container}
                source={require('assets/images/bg_signin.png')}>

                <View style={styles.inputForm}>

                    <View style={styles.input}>
                        <IconTextInput
                            onChangeText={(text) => this.setState({ fullName: text })}
                            iconUrI={require('assets/images/user_name.png')}
                            isPassword={false}
                            placeHolder={this.props.userData.full_name} />
                    </View>

                    <View style={styles.verticalIndicator}>
                    </View>

                    <View style={styles.input}>
                        <IconTextInput
                            onChangeText={(text) => this.setState({ email: text })}
                            iconUrI={require('assets/images/email.png')}
                            isPassword={false}
                            placeHolder={this.props.userData.email} />
                    </View>

                    <View style={styles.verticalIndicator}>
                    </View>

                    <View style={styles.input}>
                        <IconTextInput
                            onChangeText={(text) => this.setState({ birthday: text })}
                            iconUrI={require('assets/images/birthday.png')}
                            isPassword={false}
                            placeHolder={this.props.userData.birthday} />
                    </View>

                    <View style={styles.verticalIndicator} />

                </View>

                <View style={styles.bottomBar}>

                  
                </View>

            </Image>
        );
    }

}

//make this component available to the app
export default UserProfileScreen;
