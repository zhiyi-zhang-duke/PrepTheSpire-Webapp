import {useState} from "react";
import { Text, View, ScrollView } from 'react-native';
import { Link, useLocation } from "react-router-dom";
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

export default function RunPrep(props) {

    const location = useLocation()
    const [card1, setCard1] = useState("")

    const { data, loading } = useQuery(CARDS_QUERY, {
        variables: { class: location.state.class },
    })

    // const { data, loading } = useQuery(CARD_SCORE_QUERY, {
    //     variables: { name: "Corruption" },
    // })

    if (loading) {
        return <Loading />
    }

    const testData = [
        {key:'1', value:'Corruption'},
        {key:'2', value:'Reaper'},    
        {key:'3', value:'Demon Form'},
    ]

    return (
        <View style={styles.container}>
          <ScrollView style={styles.menuWrapper}>
            <h3 style={styles.menuTitle}>Choices</h3>
            <div style={styles.menuOption}>Card 1</div>
            <SelectList
                setSelect={(card) => setCard1(card)}
                data={testData}
                save="value"
                boxStyles={styles.blackBackground}
                inputStyles={styles.blackBackground && styles.monospaceFont}
                dropdownItemStyles={styles.monospaceFont}
                dropdownStyles={{backgroundColor: '#fff', fontFamily: 'monospace',}}
            />
          </ScrollView>
          <nav style={styles.footerNav}>
              <Link to="/" style={styles.linkStyle}><Text style={styles.menuOption}>
                Menu</Text></Link>
            </nav>          
        </View> 
    );
}