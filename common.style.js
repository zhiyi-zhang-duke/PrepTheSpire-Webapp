import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    navStyle: {
        paddingBottom: 15,
    },
    linkStyle: {
        textDecorationLine: 'none',
    },
    menuWrapper: {
        paddingTop: 80,
        paddingHorizontal: 30,
    },
    menuTitle: {
        color: '#fff',
        fontSize: 32,
        fontWeight: 'bold',
        fontFamily: 'monospace',
    },
    menuOption: {
        paddingTop: 30,
        color: '#fff',
        fontSize: 20,
        fontFamily: 'monospace',
    },
    // Figure out how to get the 2 icons side by side
    menuFooter: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuImage: {
        width: 64,
        height: 64,
    },
});
  