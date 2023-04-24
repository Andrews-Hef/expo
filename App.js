import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import Test from './components/name.js';
import Logo from './components/image.js';
import Favicon from "./assets/favicon.png";
import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';


const Stack = createNativeStackNavigator();

/*export default function Route(){
  return(
    <>
    <View>
      <Button
      title ="another page"
      onPress={() => navigation.navigate('Anotherapp')   }
    />
    </View>

</>
  )
}*/

export default function App() {
  
const [count, setCount] = useState(0);
const [lastcount, setString ]= useState("");


  return (   
    <>


    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Test name = "Andrews the legend"></Test>
      <Logo source={Favicon}/>
      <Button
        title ="clique"
        onPress={() => { setCount(count +1),setString("ta cliquer sur +1")} 
      }
      />
      <Button
        title ="ou clique ici"
        onPress={() => {setCount(count -1),setString("ta cliquer sur -1")}
      }
      >
      <Text>vous avez clique sur ajouter</Text>
      </Button>
      <Text>You clicked {count} times. {lastcount}</Text>
      <Button>

      </Button>

    </View>
    </> 
    
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
