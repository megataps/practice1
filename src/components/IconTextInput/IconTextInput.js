//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import styles from './Styles';

// create a component
class IconTextInput extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.icon}
                    resizeMode='contain'
                    source={this.props.iconLink} />
                <TextInput
                    {...this.props}
                    style={styles.input}
                    underlineColorAndroid='transparent'
                    autoCorrect={false}
                    secureTextEntry={this.props.isPassword}
                    placeholderTextColor='white'
                    placeholder={this.props.placeHolder} />
            </View>
        );
    }

}

//make this component available to the app
export default IconTextInput;
