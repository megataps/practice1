//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';

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
                    defaultValue={this.props.placeHolder} />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },

    icon:{
        width: 24,
        height: 24,
        marginRight: 10,
        marginLeft: 5
    },

    input:{
        flex: 6,
        height: 40,
        justifyContent: 'center',
    }
});

//make this component available to the app
export default IconTextInput;
