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

    const getHeroClass = async () => {
        try {
            const heroValue = await AsyncStorage.getItem('@heroClass')
            if(!heroValue) {
                alert("Please select a hero first!")
                navigate("/newrun")
            }
            setHeroClass(heroValue)
            return heroValue
        } catch(e) {
            // error reading value
        }
    }

    const getAscensionLevel = async () => {
        try {
            const ascensionLevel = await AsyncStorage.getItem('@ascensionLevel')
            if(!ascensionLevel) {
                alert("Please select an ascension level first!")
                navigate("/newrun")
            }
            setAscensionLevel(ascensionLevel)
            return ascensionLevel
        } catch(e) {
            // error reading value
        }
    }


    useEffect(() => {
        // console.log(getAscensionLevel());
      }, []);
    
    const navigate = useNavigate();

    const renderNewCard = () => {
        getHeroClass().then((value => {
            console.log(value)
        }));

        getAscensionLevel().then((value => {
            console.log(value)
        }));        
        // if(!heroClass || !ascensionLevel){
        //     alert("No hero class or ascension level detected!")
        // }
        alert("Navigating to /newcard")
        // navigate("/newcard")
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
}