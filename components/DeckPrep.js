import { useState, useEffect } from "react";
import { Text, View, ScrollView, FlatList } from 'react-native';
import { Link } from "react-router-dom";
import styles from '../common.style.js';
import { getDeckFromStorage } from './util/CommonUtil'

export default function DeckPrep(){

    const [deck, setDeck] = useState({})

    useEffect(() => {
        getDeckFromStorage(setDeck)
    }, [])    

    var deckData = []
    if(deck){
        deckData = Object.keys(deck)
        console.log(deckData)
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.menuWrapper}>
                <h2 style={styles.menuTitle}>Deck</h2>
                <FlatList
                    data={deckData}
                    renderItem={({item}) => <Text style={styles.listItem}>{item} x{deck[item]}</Text>}
                />
            </ScrollView>
            <nav style={styles.footerNav}>
              <Link to="/" style={styles.linkStyle}><Text style={styles.menuOption}>
                Menu</Text></Link>
          </nav>            
        </View>
    )
}