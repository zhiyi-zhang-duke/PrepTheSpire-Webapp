<<<<<<< HEAD
import {useState, useEffect} from "react";
import { Text, View, ScrollView, Pressable } from 'react-native';
import { Link, useNavigate } from "react-router-dom";
import styles from '../common.style.js';

const Separator = () => (
    <View style={styles.separator} />
  );  

export default function RunPrepMenu(props) {
    const [heroClass, setHeroClass] = useState("")
    const [ascensionLevel, setAscensionLevel] = useState(0)    

    useEffect(() => {
        // console.log(getAscensionLevel());
      }, []);
    
    const navigate = useNavigate();

    const renderNewCard = () => {
        navigate("/newcard")
    }

    const renderRelicPrep = () => {
        //Todo: use useNavigate to route to the RunPrep component
        alert("Navigating to RelicPrep.js...")
    }

    const renderFightPrep = () => {
        //Todo: use useNavigate to route to the RunPrep component
        alert("Navigating to FightPrep.js...")
    }

    const renderDeckPrep = () => {
        //Todo: use useNavigate to route to the RunPrep component
        alert("Navigating to DeckPrep.js...")
    }

    return (
        <View style={styles.container}>
          <ScrollView style={styles.menuWrapper}>
            <h3 style={styles.menuTitle}>Run Prep</h3>
            <Separator />
            <Pressable
              style={styles.buttonStyle}
              onPress={() => renderNewCard()}
            >
              <Text style={styles.buttonText}>Card</Text>              
            </Pressable>
            <Separator />
            <Pressable
              style={styles.buttonStyle}
              onPress={() => renderRelicPrep()}
            >
              <Text style={styles.buttonText}>Relic</Text>              
            </Pressable>
            <Separator />
            <Pressable
              style={styles.buttonStyle}
              onPress={() => renderFightPrep()}
            >
              <Text style={styles.buttonText}>Fights</Text>              
            </Pressable>
            <Separator />
            <Pressable
              style={styles.buttonStyle}
              onPress={() => renderDeckPrep()}
            >
              <Text style={styles.buttonText}>Deck</Text>              
            </Pressable>
          </ScrollView>
          <nav style={styles.footerNav}>
              <Link to="/" style={styles.linkStyle}><Text style={styles.menuOption}>
                Menu</Text></Link>
            </nav>          
        </View> 
    );
=======
import {useState} from "react";
import { Text, View, ScrollView, Pressable } from 'react-native';
import { Link } from "react-router-dom";
import styles from '../common.style.js';

const Separator = () => (
    <View style={styles.separator} />
  );  

export default function RunPrepMenu(props) {
    const testData = [
        {key:'1', value:'Corruption'},
        {key:'2', value:'Reaper'},    
        {key:'3', value:'Demon Form'},
    ]

    const renderNewCard = () => {
        //Todo: use useNavigate to route to the RunPrep component
        alert("Navigating to NewCard.js...")
    }

    const renderRelicPrep = () => {
        //Todo: use useNavigate to route to the RunPrep component
        alert("Navigating to RelicPrep.js...")
    }

    const renderFightPrep = () => {
        //Todo: use useNavigate to route to the RunPrep component
        alert("Navigating to FightPrep.js...")
    }

    const renderDeckPrep = () => {
        //Todo: use useNavigate to route to the RunPrep component
        alert("Navigating to DeckPrep.js...")
    }

    return (
        <View style={styles.container}>
          <ScrollView style={styles.menuWrapper}>
            <h3 style={styles.menuTitle}>Run Prep</h3>
            <Separator />
            <Pressable
              style={styles.buttonStyle}
              onPress={() => renderNewCard()}
            >
              <Text style={styles.buttonText}>Card</Text>              
            </Pressable>
            <Separator />
            <Pressable
              style={styles.buttonStyle}
              onPress={() => renderNewCard()}
            >
              <Text style={styles.buttonText}>Relic</Text>              
            </Pressable>
            <Separator />
            <Pressable
              style={styles.buttonStyle}
              onPress={() => renderNewCard()}
            >
              <Text style={styles.buttonText}>Fights</Text>              
            </Pressable>
            <Separator />
            <Pressable
              style={styles.buttonStyle}
              onPress={() => renderNewCard()}
            >
              <Text style={styles.buttonText}>Deck</Text>              
            </Pressable>
          </ScrollView>
          <nav style={styles.footerNav}>
              <Link to="/" style={styles.linkStyle}><Text style={styles.menuOption}>
                Menu</Text></Link>
            </nav>          
        </View> 
    );
>>>>>>> master
}