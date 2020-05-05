import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CountriesContainer from './screens/CountriesContainer.js'
// import GlobalList from './screens/GlobalList.js'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to the Covid19 Tracking App!</Text>
      <Text style={styles.instructions}>A summary of the virus' impact on the global population.</Text>
      <Text style={styles.instructions}>Click to continue...</Text>
      <View>
        {/* <GlobalList/> */}
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
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    margin: 10,
  },
});
