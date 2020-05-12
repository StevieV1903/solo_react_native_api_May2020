import * as React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import CountriesContainer from './screens/CountriesContainer';

export default function App() {
  
  return (
    

    
    <View style={styles.container}> 
        <ImageBackground source={require('./screens/assets/covid19.png')} style={styles.image}>
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
    justifyContent: "center",
    
  },
});
