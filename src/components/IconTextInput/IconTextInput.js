//import liraries
import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import styles from './Styles';
import Colors from 'config/colors';

class IconTextInput extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.icon}
                    resizeMode='contain'
                    source={this.props.iconUrI} />
                <TextInput
                    {...this.props}
                    style={styles.input}
                    underlineColorAndroid={Colors.transparent}
                    autoCorrect={false}
                    keyboardType={this.props.keyboardType}
                    secureTextEntry={this.props.isPassword}
                    placeholderTextColor={Colors.white}
                    returnKeyType={this.props.returnKey}
                    placeholder={this.props.placeHolder}
                    foc
                     />
            </View>
        );
    }
}

IconTextInput.propTypes = {
  iconUrI: PropTypes.number.isRequired,
  returnKey: PropTypes.string.isRequired
};

export default IconTextInput;
