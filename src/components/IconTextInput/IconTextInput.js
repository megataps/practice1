//import liraries
import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import styles from './Styles';
import Colors from 'config/colors';

class IconTextInput extends Component {

    error() {
        if (this.props.error) {
            return <Text style={styles.error}>{this.props.error}</Text>
        }
        return null
    }

    render() {
        return (
            <View style={styles.wrapperContainer}>

                <View style={styles.container}>
                    <Image
                        style={styles.icon}
                        resizeMode='contain'
                        source={this.props.iconUrI} />

                    <TextInput
                        ref='TextInput'
                        {...this.props}
                        style={styles.input}
                        underlineColorAndroid={Colors.transparent}
                        autoCorrect={false}
                        placeholderTextColor={Colors.white}
                    />
                </View>
                {this.error()}
            </View>
        );
    }
}

IconTextInput.propTypes = {
    iconUrI: PropTypes.number.isRequired
};

export default IconTextInput;
