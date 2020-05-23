import 'react-native-gesture-handler';
import * as React from 'react';
import { ImageBackground, StyleSheet, View, ScrollView } from 'react-native';
import { Header } from 'react-native-elements';
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
    
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
