import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

// import { ImageBackground, StyleSheet, View, ScrollView } from 'react-native';
// import CountriesContainer from './screens/CountriesContainer';

import HomeScreen from './src/screens/HomeScreen.js';
import CountrySelectScreen from './src/screens/CountrySelectScreen.js';
// import CountryResultsScreen from './src/screens/CountryResultsScreen.js';

const Stack = createStackNavigator();

export default function App() {
  // console.disableYellowBox = true;
  
  return (

    // <MenuProvider>
    
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                title: 'Home',
                headerStyle: {
                  backgroundColor: 'black'
                },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 18,
                }
              }}
            />

          <Stack.Screen
						name="CountrySelectScreen"
						component={CountrySelectScreen}
						options={{
							title: 'Select Country',
							headerStyle: {
								backgroundColor: 'black'
							},
							headerTintColor: '#fff',
							headerTitleStyle: {
								fontWeight: 'bold',
								fontSize: 18
							}
            }}
            />

        </Stack.Navigator>
      </NavigationContainer>


    // </MenuProvider>
  
    // <View style={styles.container}> 
    
    //     <ImageBackground source={require('./screens/assets/covid19.png')} style={styles.image}>
        
    //     <View>
          
    //         <CountriesContainer/> 
      
    //       </View>
        
    //     </ImageBackground>
      
    //   </View>  
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
    
//   },
//   image: {
//     flex: 1,
//     resizeMode: "cover",
//     justifyContent: "center",
//   },
// });
