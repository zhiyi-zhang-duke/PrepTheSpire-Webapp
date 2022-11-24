import { useState, React } from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import styles from '../common.style.js';
import { Card } from '@rneui/base';


export default function CardBox(props) {
    const renderAddCardModal = props.renderAddCardModal
    const upgradeCard = props.upgradeCard
    const [card, setCard] = useState(props.cardData.card)
    const [upgradeDisabled, setUpgradeDisabled] = useState(false)

    const addCardIcon = require('../assets/add.png')
    const upgradeIcon = require('../assets/upgrade.png')

    return (
        <Card>
            <Card.Title>{card}</Card.Title>
            <View style={styles.cardRow}>
                <Text style={styles.cardText}>Act 1: {props.cardData.act1}</Text>
                <Text style={styles.cardText}>Act 2: {props.cardData.act2}</Text>
                <Text style={styles.cardText}>Act 3: {props.cardData.act3}</Text>   
                <Pressable
                    onPress={() => {
                        renderAddCardModal(props.cardData.card)
                    }}
                >
                    <Image
                        style={styles.addCardImage} source={addCardIcon}></Image>                            
                </Pressable>
            </View>
            <View style={styles.cardRow}>
                <Text style={styles.cardText}>Overall: {props.cardData.overall}</Text>
                <Text style={styles.cardText}>Upgrade: {props.cardData.upgrade}</Text>
                <Pressable
                    onPress={() => {
                        setCard(card+"+")
                        setUpgradeDisabled(true)
                        upgradeCard(card)
                    }}
                    disabled={upgradeDisabled}
                >
                    <Image
                        style={styles.addCardImage} source={upgradeIcon}></Image>                            
                </Pressable>                         
            </View>
        </Card>
    )
}