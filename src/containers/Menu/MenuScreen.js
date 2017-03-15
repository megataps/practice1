//import liraries
import React, { Component, PropTypes } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image
} from 'react-native';

// create a component
class MenuScreen extends Component {
    render() {
        let { closeDrawer } = this.props
        return (
            <Image
                style={styles.container}
                source={require('assets/images/bg_signin.png')}>

                <TouchableOpacity
                    style={styles.signInButton}
                    onPress={closeDrawer}
                    underlayColor='#43ff3366'>
                    <Text style={styles.button}>Sign In</Text>
                </TouchableOpacity>
                <View style={{ backgroundColor: 'gray', height: 0.5 }} />
                <TouchableOpacity
                    style={styles.signInButton}
                    onPress={closeDrawer}
                    underlayColor='#43ff3366'>
                    <Text style={styles.button}>About</Text>
                </TouchableOpacity>
                <View style={{ backgroundColor: 'gray', height: 0.5 }} />
                <TouchableOpacity
                    style={styles.signInButton}
                    onPress={closeDrawer}
                    underlayColor='#43ff3366'>
                    <Text style={styles.button}>Logout</Text>
                </TouchableOpacity>

            </Image>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
    },
    controlText: {
        color: 'white',
    },
    signInButton: {
        backgroundColor: '#ff3366',
        height: 40,
        justifyContent: 'center',
    },
    button: {
        color: '#fff',
        alignSelf: 'center',
        
        fontWeight: 'bold'
    },
})
//make this component available to the app
export default MenuScreen;
