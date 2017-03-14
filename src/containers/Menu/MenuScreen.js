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

                {/*<Text style={styles.controlText}>Control Panel</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={closeDrawer}>
                    <Text>Close Drawer</Text>
                </TouchableOpacity>*/}
            </Image>
        )
    }
}

// MenuScreen.propTypes = {
//     closeDrawer: PropTypes.func.isRequired
// };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
    },
    controlText: {
        color: 'white',
    },
    button: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
    }
})
//make this component available to the app
export default MenuScreen;
