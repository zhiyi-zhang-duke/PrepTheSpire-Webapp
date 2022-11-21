import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    navStyle: {
        paddingBottom: 15,
    },
    footerNav: {
        padding: 30,
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
        flexDirection: 'row',
    },
    menuImage: {
        width: 64,
        height: 64,
    },
    //SelectList styles
    blackBackground: {
        backgroundColor: '#5A5A5A',
    },
    whiteBackground: {
        backgroundColor: '#fff',
    },
    monospaceFont: {
        fontFamily: 'monospace',
    },

    //Pressables and separators
    separator: {
        marginVertical: 8,
        borderBottomColor: '#000000',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginTop: 15,
        marginBottom: 15,
    },
    buttonStyle: {
        borderRadius: 6,
        backgroundColor: '#5A5A5A',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
    buttonText: {
        color: 'white',
        fontFamily: 'monospace',
        fontWeight: 'bold',
        fontSize: 20,
    },

    //Card styles
    cardText: {
        padding: 10,
    }    
});
  