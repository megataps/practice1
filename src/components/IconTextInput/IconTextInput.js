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
                    style={styles.input}
                    underlineColorAndroid='transparent'
                    autoCorrect={false}
                    placeholder={this.props.placeHolder} />
            </View>
        );
    }
}
//make this component available to the app
export default IconTextInput;
