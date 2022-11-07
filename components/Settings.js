import React from 'react';
import { Text, View } from 'react-native';
import styles from '../common.style.js';
import { Link } from "react-router-dom";

export default function Settings() {
    return (
        <View style={styles.container}>
          <View style={styles.menuWrapper}>
            <h2 style={styles.menuTitle}>Settings</h2>
            <nav>
              <Link to="/" style={styles.linkStyle}><Text style={styles.menuOption}>Menu</Text></Link>
            </nav>
          </View>
        </View>    
      );
}