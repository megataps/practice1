//import liraries
import React, { Component, PropTypes } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image,
    Platform
} from 'react-native';

// create a component
class MenuScreen extends Component {

    render() {

        // let { closeDrawer } = this.props

        return (
            <View
                style={styles.container}>

                <TouchableOpacity
                    onPress={this.props.closeDrawer}
                    underlayColor='#43ff3366'>
                    <Image
                        style={styles.closeIcon}
                        source={require('assets/images/close.png')} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.signInButton, { marginTop: 0, }]}
                    onPress={this.props.onProfile}
                    underlayColor='#43ff3366'>
                    <Text style={styles.button}>User Profile</Text>
                </TouchableOpacity>
                <View style={{ backgroundColor: '#901D1D26', height: 0.4 }} />
                <TouchableOpacity
                    style={styles.signInButton}
                    onPress={this.props.onAbout}
                    underlayColor='#43ff3366'>
                    <Text style={styles.button}>About</Text>
                </TouchableOpacity>
                <View style={{ backgroundColor: '#901D1D26', height: 0.4 }} />
                <TouchableOpacity
                    style={styles.signInButton}
                    onPress={this.props.onLogout}
                    underlayColor='#43ff3366'>
                    <Text style={styles.button}>Logout</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

MenuScreen.propTypes = {
  closeDrawer: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
        backgroundColor: 'white'
    },

    closeIcon: {
        padding: Platform.OS === 'ios' ? 10 : 0,
        width: Platform.OS === 'ios' ? 10 : 25,
        height: Platform.OS === 'ios' ? 10 : 25,
        marginTop: Platform.OS === 'ios' ? 30 : 20,
        marginBottom: Platform.OS === 'ios' ? 20 : 20,
        marginLeft: 10,
    },

    signInButton: {
        backgroundColor: '#F6F6F6',
        height: 40,
        justifyContent: 'center',
    },
    button: {
        color: '#1D1D26',
        marginLeft: 20,
        fontFamily: 'Avenir',
        fontWeight: '100'
    },
})
//make this component available to the app
export default MenuScreen;
