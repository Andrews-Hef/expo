import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import Test from './components/name.js';
import Logo from './components/image.js';
import Favicon from "./assets/favicon.png";
import React, { useState, useEffect } from 'react';


export default function App() {
  
const [count, setCount] = useState(0);
  return (    
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Test name = "Andrews the legend"></Test>
      <Logo source={Favicon}/>
      <Button
        title ="clique"
        onPress={() => setCount(count +1)
      }
      />
      <Text>You clicked {count} times</Text>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
