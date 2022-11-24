import { useState, useEffect } from "react";
import { Text, View, ScrollView, Pressable, Modal, Image } from 'react-native';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { gql, useQuery } from '@apollo/client'
import styles from '../common.style.js';
import Loading from './Loading'
// import { Link, useLocation } from "react-router-dom";
import { Card } from '@rneui/base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CardBox from "./CardBox";

const CARD_SCORE_QUERY = gql`
    query cardTier($name: String!) {
        cardTierByName(name: $name){
            card
            act1
            act2
            act3
            overall
            upgrade
        }
    }
`

const Separator = () => (
    <View style={styles.separator} />
  );

export default function CardsAnalysis() {
    const location = useLocation()
    const navigate = useNavigate();

    const [modalVisible, setModalVisible] = useState(false)
    const [deck, setDeck] = useState({})

    const [selectedCard, setSelectedCard] = useState("")


    // Get deck from storage
    const getDeckFromStorage = async () => {
        try {
            const jsonDeck = await AsyncStorage.getItem('@deck')
            const decObj = jsonDeck != null ? JSON.parse(jsonDeck) : null;
            setDeck(decObj)
        } catch(e) {
            // error reading value
        }
    }
    
    useEffect(() => {
        getDeckFromStorage()
    }, [])

    // Get card data for each card choice
    const { data: data1, loading: loading1 } = useQuery(CARD_SCORE_QUERY, {
        variables: { name: location.state.card1 },
    })

    const { data: data2, loading: loading2 } = useQuery(CARD_SCORE_QUERY, {
        variables: { name: location.state.card2 },
    })    

    const { data: data3, loading: loading3 } = useQuery(CARD_SCORE_QUERY, {
        variables: { name: location.state.card3 },
    })

    if (loading1 || loading2 || loading3) {
        return <Loading />
    }
    
    var card1Data;
    if (data1) {
        card1Data = data1.cardTierByName
    }

    var card2Data;
    if (data2) {
        card2Data = data2.cardTierByName
    }

    var card3Data;
    if (data3) {
        card3Data = data3.cardTierByName
    }


    const renderRunPrepMenu = () => {
        navigate("/runprep")
    }

    const addCard = () => {
        alert("Coming soon!")
    }

    const renderAddCardModal = (card) => {
        console.log(card)
        setSelectedCard(card)
        setModalVisible(true)
    }

    const upgradeCard = (cardData) => {
        console.log(cardData)
    }

    const storeDeck = async (deck) => {
        try {
            const jsonDeckValue = JSON.stringify(deck)
            await AsyncStorage.setItem('@deck', jsonDeckValue)
            console.log(`Stored deck ${jsonDeckValue}`)
        } catch (e) {
        // saving error
        }
    }

    const addCardToDeck = () => {
        console.log(`Adding ${selectedCard} to deck.`)
        if(!deck[selectedCard]){
            deck[selectedCard] = 1
        }
        else {
            deck[selectedCard] = deck[selectedCard]+1
        }
        setDeck(deck)
        storeDeck(deck)
        setModalVisible(false)
    }

    const closeModal = () => {
        setModalVisible(false)
    }
    
    return (
        <View style={styles.container}>
            <ScrollView style={styles.menuWrapper}>
                <h2 style={styles.menuTitle}>Analysis</h2>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        alert("Dismissing modal")
                        setModalVisible(!modalVisible)
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <h2 style={styles.menuTitle}>Add This?</h2>
                            <Separator />
                            <View style={{flexDirection: 'row'}}>
                                <Pressable
                                    style={styles.modalButtonStyle}
                                    onPress={addCardToDeck}
                                >
                                    <Text style={styles.buttonText}>Add</Text>              
                                </Pressable>
                                <Pressable
                                    style={styles.modalButtonStyle}
                                    onPress={closeModal}
                                >
                                    <Text style={styles.buttonText}>Nevermind</Text>              
                                </Pressable>                                
                            </View>

                        </View>
                    </View>
                </Modal>
                <CardBox 
                    renderAddCardModal={renderAddCardModal}
                    upgradeCard={upgradeCard}
                    cardData={card1Data}
                />
                <CardBox 
                    renderAddCardModal={renderAddCardModal}
                    upgradeCard={upgradeCard}
                    cardData={card2Data}
                />
                <CardBox 
                    renderAddCardModal={renderAddCardModal}
                    upgradeCard={upgradeCard}
                    cardData={card3Data}
                />
                <Separator />
                <Pressable
                    style={styles.buttonStyle}
                    onPress={() => renderRunPrepMenu()}
                >
                    <Text style={styles.buttonText}>Skip</Text>              
                </Pressable>
                <Separator />
                <Pressable
                    style={styles.buttonStyle}
                    onPress={() => addCard()}
                >
                    <Text style={styles.buttonText}>Add a Card</Text>              
                </Pressable>
            </ScrollView>
            <nav style={styles.footerNav}>
              <Link to="/" style={styles.linkStyle}><Text style={styles.menuOption}>
                Menu</Text></Link>
            </nav>            
        </View> 
    )
}