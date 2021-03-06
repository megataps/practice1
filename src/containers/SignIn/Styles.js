import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        
        width: null,
        height: null,
    },

    logo: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },

    inputForm: {
        flex: 1,
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
        flex: 1,
        backgroundColor: '#ff3366',
        marginTop: 30,
        height: 40
    },

    button: {
        color: '#fff',
        borderRadius: 5,
        padding: 15,
        alignSelf: 'center',
        fontWeight: 'bold'
    },

    errorText: {
        color: 'red',
        backgroundColor: 'transparent',
        textAlign: 'center',
        lineHeight: 20
    },

});