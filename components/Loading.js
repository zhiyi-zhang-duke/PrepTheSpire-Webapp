import { ActivityIndicator, View } from 'react-native';
import styles from '../common.style.js';

export default function Loading() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#fff" />
        </View> 
    );
}