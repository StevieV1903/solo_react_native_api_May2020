import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CountriesContainer from './screens/CountriesContainer.js'

export default function App() {
  return (

    <View style={styles.container}> 
      <Text style={styles.date}>{new Date().toDateString()}</Text>
      <Text style={styles.welcome}>Welcome to the Covid19 Tracking App</Text>
      <Text style={styles.instructions}>A summary of the virus' impact on the global population.</Text>
      
      <View>
    
        <CountriesContainer/>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,
  },
  welcome: {
    fontSize: 20,
    color: 'purple',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
  },
  instructions: {
    textAlign: 'center',
    fontSize: 17,
    color: '#333333',
    margin: 20,
  },
  date: {
    marginTop: 15,
    fontSize: 18,
    color: '#333333',
    textAlign: "center",
    fontWeight: 'bold'
  }
});
