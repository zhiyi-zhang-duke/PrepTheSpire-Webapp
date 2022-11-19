import {useState} from "react";
import { Text, View, ScrollView, Pressable } from 'react-native';
import { Link, useNavigate } from "react-router-dom";
import { gql, useQuery } from '@apollo/client'
import styles from '../common.style.js';
import Loading from './Loading'
// import { Link, useLocation } from "react-router-dom";
import { Card } from '@rneui/base';


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

    // Todo: change this to dynamic cards
    const cardName1 = "Acrobatics"
    const cardName2 = "Deadly Poison"
    const cardName3 = "Bullet Time"

    const [card1, setCard1] = useState("")
    const [card2, setCard2] = useState("")
    const [card3, setCard3] = useState("")

    const navigate = useNavigate();


    const { data: data1, loading: loading1 } = useQuery(CARD_SCORE_QUERY, {
        // Todo: fix the hardcoded value
        // variables: { class: location.state.class },
        variables: { name: cardName1 },
    })

    const { data: data2, loading: loading2 } = useQuery(CARD_SCORE_QUERY, {
        // Todo: fix the hardcoded value
        // variables: { class: location.state.class },
        variables: { name: cardName2 },
    })    

    const { data: data3, loading: loading3 } = useQuery(CARD_SCORE_QUERY, {
        // Todo: fix the hardcoded value
        // variables: { class: location.state.class },
        variables: { name: cardName3 },
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
    
    return (
        <View style={styles.container}>
            <ScrollView style={styles.menuWrapper}>
                <h2 style={styles.menuTitle}>Analysis</h2>
                <Card>
                    <Card.Title>{card1Data.card}</Card.Title>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.cardText}>Act 1: {card1Data.act1}</Text>
                        <Text style={styles.cardText}>Act 2: {card1Data.act2}</Text>
                        <Text style={styles.cardText}>Act 3: {card1Data.act3}</Text>                        
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.cardText}>Overall: {card1Data.overall}</Text>
                        <Text style={styles.cardText}>Upgrade: {card1Data.upgrade}</Text>
                    </View>
                </Card>
                <Card>
                    <Card.Title>{card2Data.card}</Card.Title>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.cardText}>Act 1: {card2Data.act1}</Text>
                        <Text style={styles.cardText}>Act 2: {card2Data.act2}</Text>
                        <Text style={styles.cardText}>Act 3: {card2Data.act3}</Text>                        
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.cardText}>Overall: {card2Data.overall}</Text>
                        <Text style={styles.cardText}>Upgrade: {card2Data.upgrade}</Text>
                    </View>
                </Card>       
                <Card>
                    <Card.Title>{card3Data.card}</Card.Title>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.cardText}>Act 1: {card2Data.act1}</Text>
                        <Text style={styles.cardText}>Act 2: {card2Data.act2}</Text>
                        <Text style={styles.cardText}>Act 3: {card2Data.act3}</Text>                        
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.cardText}>Overall: {card2Data.overall}</Text>
                        <Text style={styles.cardText}>Upgrade: {card2Data.upgrade}</Text>
                    </View>
                </Card>
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