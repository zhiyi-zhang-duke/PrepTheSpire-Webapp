import AsyncStorage from '@react-native-async-storage/async-storage';

export async function storeDeck(deck) {
    try {
        const jsonDeckValue = JSON.stringify(deck)
        await AsyncStorage.setItem('@deck', jsonDeckValue)
    } catch (e) {
    // saving error
    }
}

// This function expects the useState function to set the deck as a state variable
export async function getDeckFromStorage(setDeck) {
    try {
        const jsonDeck = await AsyncStorage.getItem('@deck')
        const deckObj = jsonDeck != null ? JSON.parse(jsonDeck) : null;
        setDeck(deckObj)
    } catch(e) {
        // error reading value
    }
}