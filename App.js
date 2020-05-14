import * as React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { Header } from 'react-native-elements';
import CountriesContainer from './screens/CountriesContainer';

export default function App() {
  
  return (
  
    <View style={styles.container}> 
        <ImageBackground source={require('./screens/assets/covid19.png')} style={styles.image}>
        <Header
          centerComponent={{ text: 'COVID-19 TRACKING APP', style: { color: '#fff' } }}
          containerStyle={{
            backgroundColor: "#723988",
            justifyContent: 'space-around',
            marginTop: 50,
          }}
        />
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
    marginTop: 10,
    
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
