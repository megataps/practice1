import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        width: null,
        height: null,
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
        flex: 1,
        backgroundColor: '#ff3366',
        marginTop: 50
    },

    button: {
        color: '#fff',
        borderRadius: 5,
        padding: 15,
        alignSelf: 'center'
    },
    
});