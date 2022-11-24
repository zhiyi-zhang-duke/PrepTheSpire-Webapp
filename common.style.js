import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    navStyle: {
        paddingBottom: 40,
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
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily: 'monospace',
    },
    menuOption: {
        color: '#fff',
        fontSize: 30,
        fontFamily: 'monospace',
    },
    // Figure out how to get the 2 icons side by side
    menuFooter: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 60,
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
        padding: 8,
    },
    addCardImage: {
        width: 32,
        height: 32,
    },
    cardRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    //Modal styles
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        margin: 20,
        backgroundColor: "#5A5A5A",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },
    modalButtonStyle: {
        borderRadius: 6,
        backgroundColor: '#6B695E',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        margin: 10,
    },

    // Deck styles
    listItem: {
        backgroundColor: '#000000',
        color: '#fff',
        fontFamily: 'Monospace',
        padding: 5,
        fontSize: 18,
    }
});
  