import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    wrapperContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },

    container: {
        flex: 1,
        flexDirection: 'row',
        height: 40,
        marginTop: 10,
        alignItems: 'center'
    },

    icon: {
        width: 21,
        height: 21,
        marginRight: 10,
        padding: 0,
        marginBottom:0,
    },

    input: {
        flex: 6,
        color: 'white',
    },

    error: {
        flex: 1,
        color: 'red',
        backgroundColor: 'transparent',
        alignSelf:'stretch',
        marginLeft: 31,
        marginTop: 5
    },

});