import * as React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import CountriesContainer from './screens/CountriesContainer'

export default function App() {
  
  const image = { uri: "https://reactjs.org/logo-og.png" };
  
  return (

    

    <View style={styles.container}> 

      <ImageBackground source={image} style={styles.image}>
      
        <View>
        <CountriesContainer/> 
        </View>

        </ImageBackground>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});
