import React, { useEffect, useState } from 'react';
import {ActivityIndicator, FlatList, Text, View, StyleSheet} from 'react-native'


const countriesContainer = () => {

    const [isLoading, setLoading] = useState( true )
    const [countriesList, setCountriesList] = useState( [] )
    

    useEffect(() => {
        fetch('https://api.covid19api.com/summary')
            .then (( response ) => response.json())
            .then((json) => setCountriesList( json.Countries ))
            .catch((error) => console.error( error ))
            .finally(() => setLoading( false ));
    }, []);


    return (
              <View style={styles.indicator}>
                {isLoading ? <ActivityIndicator/> : (
                  <FlatList
                    data={countriesList}
                    keyExtractor={({ CountryCode }, index) => CountryCode}
                    renderItem={({ item }) => (
                      <Text>{item.Country}</Text>
                    )}
                  />
                )}
              </View>
            );
    
    
}

const styles = StyleSheet.create({

    indicator: {
        flex: 1, 
        padding: 24 },
    })      

export default countriesContainer;