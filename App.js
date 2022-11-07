import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import NewRun from './components/NewRun';
import Menu from './components/Menu';
import Settings from './components/Settings';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import styles from './common.style.js';

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Menu />} />
          <Route exact path="/newrun" element={<NewRun />} />
          {/* <Route exact path="/continuerun" element={<ContinueRun />} /> */}
          <Route exact path="/settings" element={<Settings />} />           
        </Routes>
    </BrowserRouter>
  );
}

//To do: convert these to real modular components
// function Menu() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.menuWrapper}>
//         <h2 style={styles.menuTitle}>Prep The Spire</h2>
//         <nav>
//           <Link to="/newrun" style={styles.linkStyle}><Text style={styles.menuOption}>New Run</Text></Link>
//         </nav>        
//         <nav>
//           <Link to="/settings" style={styles.linkStyle}><Text style={styles.menuOption}>Settings</Text></Link>
//         </nav>
//       </View>
//     </View>
//   );
// }

// function Settings() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.menuWrapper}>
//         <h2 style={styles.menuTitle}>Settings</h2>
//         <nav>
//           <Link to="/" style={styles.linkStyle}><Text style={styles.menuOption}>Menu</Text></Link>
//         </nav>
//       </View>
//     </View>    
//   );
// }

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.menuWrapper}>
//         <Text style={styles.menuTitle}>Prep The Spire</Text>
//         <Text style={styles.menuOption}>Prep New Run</Text>
//         <Text style={styles.menuOption}>Continue Prepped Run</Text>
//         <Text style={styles.menuOption}>Settings</Text>
//       </View>
//     </View>
//   );
// }
