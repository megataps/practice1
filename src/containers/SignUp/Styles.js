import { StyleSheet } from 'react-native';
import Metrics from 'config/metrics'; 
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        width: null,
        height: Metrics.screenHeight,
    },

    logo: {
        flex: 1,
    },

    inputForm: {
        flex: 2,
        alignItems: 'center',
        paddingLeft: 25,
        paddingRight: 25,
    },

    input: {
        alignItems: 'center',
        height: 50,
    },

    verticalIndicator: {
        height: 1,
        width: 1000,
        alignItems: 'center',
        backgroundColor: 'gray',
    },

    bottomBar: {
        flex: 1,
    },

    signInButton: {
        backgroundColor: '#ff3366',
        justifyContent: 'center',
        height: 44
    },

    button: {
        color: '#fff',
        alignSelf: 'center',
        fontWeight: 'bold',
        backgroundColor: '#00000000',
    },

    errorText: {
        color: 'red',
        backgroundColor: 'transparent',
        textAlign: 'center',
        lineHeight: 20
    },

});