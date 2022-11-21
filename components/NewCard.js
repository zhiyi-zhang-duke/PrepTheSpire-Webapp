import {useState} from "react";
import { Text, View, ScrollView, Pressable } from 'react-native';
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from '../common.style.js';
import { gql, useQuery } from '@apollo/client'
import Loading from './Loading'
import { SelectList } from "react-native-dropdown-select-list";

const CARDS_QUERY = gql`
    query cardTierClass($class: String!){
        cardTiersByClass(class: $class){
            card
            act1
            act2
            act3
            overall
            upgrade
        }
    }
`

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

export default function NewCard(props) {

    const location = useLocation()    
    const [card1, setCard1] = useState("")
    const [card2, setCard2] = useState("")
    const [card3, setCard3] = useState("")

    const navigate = useNavigate();

    const { data, loading } = useQuery(CARDS_QUERY, {
        // Todo: fix the hardcoded value
        // variables: { class: location.state.class },
        variables: { class: "Silent" },
    })

    if (loading) {
        return <Loading />
    }

    var cardData;
    if (data.cardTiersByClass) {
        cardData = data.cardTiersByClass.map((item) => {
            return item.card
        })
    }

    const renderCardsAnalysis = () => {
        navigate("/cardsanalysis")
    }

    //Todo: Make the divs nicer
    return (
        <View style={styles.container}>
          <ScrollView style={styles.menuWrapper}>
            <h2 style={styles.menuTitle}>New Card</h2>
            <div style={styles.menuOption}>Card 1</div>
            <SelectList
                setSelected={(val) => setCard1(val)}
                data={cardData ? cardData : []}
                save="value"
                boxStyles={styles.blackBackground}
                inputStyles={styles.blackBackground && styles.monospaceFont}
                dropdownItemStyles={styles.monospaceFont}
                dropdownStyles={{backgroundColor: '#fff', fontFamily: 'monospace',}}
            />
            <div style={styles.menuOption}>Card 2</div>
            <SelectList
                setSelected={(card2) => setCard2(card2)}
                data={cardData ? cardData : []}
                save="value"
                boxStyles={styles.blackBackground}
                inputStyles={styles.blackBackground && styles.monospaceFont}
                dropdownItemStyles={styles.monospaceFont}
                dropdownStyles={{backgroundColor: '#fff', fontFamily: 'monospace',}}
            />
            <div style={styles.menuOption}>Card 3</div>
            <SelectList
                setSelected={(card3) => setCard3(card3)}
                data={cardData ? cardData : []}
                save="value"
                boxStyles={styles.blackBackground}
                inputStyles={styles.blackBackground && styles.monospaceFont}
                dropdownItemStyles={styles.monospaceFont}
                dropdownStyles={{backgroundColor: '#fff', fontFamily: 'monospace',}}
            />
            <Separator />
            <Pressable
              style={styles.buttonStyle}
              onPress={() => renderCardsAnalysis()}
            >
              <Text style={styles.buttonText}>Analyze</Text>              
            </Pressable>               
          </ScrollView>
          <nav style={styles.footerNav}>
              <Link to="/" style={styles.linkStyle}><Text style={styles.menuOption}>
                Menu</Text></Link>
            </nav>          
        </View> 
    );
}