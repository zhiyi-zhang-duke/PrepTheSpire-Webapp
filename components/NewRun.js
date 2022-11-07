import { Link } from "react-router-dom";
import { Text, View } from 'react-native';
import styles from '../common.style.js';

export default function NewRun() {
    return (
        <View style={styles.container}>
          <View style={styles.menuWrapper}>
            <h2 style={styles.menuTitle}>New Run</h2>
            <nav>
              <Link to="/" style={styles.linkStyle}><Text style={styles.menuOption}>Menu</Text></Link>
            </nav>
          </View>
        </View> 
    );
}