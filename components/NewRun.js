import {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Text, View, ScrollView, Pressable } from 'react-native';
import styles from '../common.style.js';
import { SelectList } from "react-native-dropdown-select-list";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Separator = () => (
  <View style={styles.separator} />
);

export default function NewRun() {
    const [heroClass, setHeroClass] = useState("")
    const [ascensionLevel, setAscensionLevel] = useState(0)
    const navigate = useNavigate();

    const heroClassData = [
      {key:'1', value:'Ironclad'},
      {key:'2', value:'Silent'},
      {key:'3', value:'Defect'},
      {key:'4', value:'Watcher'},
    ]

    const ascensionLevelData = [
      {key:'1', value:1},
      {key:'2', value:2},
      {key:'3', value:3},
      {key:'4', value:4},
      {key:'5', value:5},
      {key:'6', value:6},
      {key:'7', value:7},
      {key:'8', value:8},
      {key:'9', value:9},
      {key:'10', value:10},
      {key:'11', value:11},
      {key:'12', value:12},
      {key:'13', value:13},
      {key:'14', value:14},
      {key:'15', value:15},
      {key:'16', value:16},
      {key:'17', value:17},
      {key:'18', value:18},
      {key:'19', value:19},
      {key:'20', value:20},
    ]

    const storeHero = async (value) => {
      try {
        await AsyncStorage.setItem('@heroClass', value)
        console.log(`Stored heroClass ${heroClass}`)
      } catch (e) {
        console.log(e)
      }
    }    

    const storeAscensionLevel = async (value) => {
      try {
        await AsyncStorage.setItem('@ascensionLevel', value)
        console.log(`Stored ascensionLevel ${ascensionLevel}`)
      } catch (e) {
        console.log(e)
      }
    }        

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

    const renderRunPrep = () => {
      storeHero(heroClass)
      storeAscensionLevel(ascensionLevel)
      alert(`Start the run as ${heroClass}`)
    }

    const getStoredValues = () => {
      getHeroClass().then((value => {
          console.log(value)
      }));

      getAscensionLevel().then((value => {
          console.log(value)
      }));
    }

    return (
        <View style={styles.container}>
          <ScrollView style={styles.menuWrapper}>
            <h2 style={styles.menuTitle}>New Run</h2>
            <h3 style={styles.menuTitle}>Class</h3>
            <SelectList
                setSelected={(heroClass) => setHeroClass(heroClass)}
                data={heroClassData}
                save="value"
                boxStyles={styles.blackBackground}
                inputStyles={styles.blackBackground && styles.monospaceFont}
                dropdownItemStyles={styles.monospaceFont}
                dropdownStyles={{backgroundColor: '#fff', fontFamily: 'monospace',}}
            />          
            <h3 style={styles.menuTitle}>Ascension Level</h3>
            <SelectList
                setSelected={(ascensionLevel) => setAscensionLevel(ascensionLevel)}
                data={ascensionLevelData}
                save="value"
                boxStyles={styles.blackBackground}
                inputStyles={styles.blackBackground && styles.monospaceFont}
                dropdownItemStyles={styles.monospaceFont}
                dropdownStyles={{backgroundColor: '#fff', fontFamily: 'monospace',}}
            />
            <Separator />
            <Pressable
              style={styles.buttonStyle}
              onPress={() => renderRunPrep()}
            >
              <Text style={styles.buttonText}>Start Run</Text>              
            </Pressable>
            <Separator />
            <Pressable
              style={styles.buttonStyle}
              onPress={() => getStoredValues()}
            >
              <Text style={styles.buttonText}>Test Storage</Text>              
            </Pressable>            
          </ScrollView>
          <nav style={styles.footerNav}>
              <Link to="/" style={styles.linkStyle}><Text style={styles.menuOption}>
                Menu</Text></Link>
            </nav>          
        </View> 
    );
}