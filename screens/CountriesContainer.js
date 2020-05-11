import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';


// import CountryDetailOverlay from './CountryDetailOverlay';



const CountriesContainer = () => {

    const [isLoading, setLoading] = useState( true )
    const [countriesList, setCountriesList] = useState( [] )
    const [globalData, setGlobalData] = useState( {} )
    const [selectedCountry, setSelectedCountry] = useState( "" )
    

    useEffect(() => {
        
        fetch('https://api.covid19api.com/summary')
            .then (( response ) => response.json())
            .then(( dataReturnedFromFetch ) => {
                setCountriesList( dataReturnedFromFetch.Countries )
                return dataReturnedFromFetch 
            })
            .then ((dataReturnedFromFetch ) => {
                setGlobalData( dataReturnedFromFetch.Global)
                return dataReturnedFromFetch
            })
            // .catch((error) => console.error( error ))
            .then(() => setLoading( false ))
    }, []);


    const getCountryNamesForDropdownMenu = () => {
        const countryNames = countriesList.map((countryObject) => {
            return {value: countryObject, label: countryObject.Country}
        })
        return countryNames;

    }


    return (
              <ScrollView>
                <View style={styles.indicator}>
                <Text style={styles.instructions}>GLOBAL cases: {globalData.TotalConfirmed}</Text>
                <Text style={styles.instructions}>GLOBAL recoveries: {globalData.TotalRecovered}</Text>
                <Text style={styles.instructions}>GLOBAL deaths: {globalData.TotalDeaths}</Text>
                
                {isLoading ? <ActivityIndicator/> : (
                    <Text style={styles.instructions_click}>Click on a Country below...</Text>
                )}
            
                </View>
                <View style={styles.indicator}>
                {isLoading ? <ActivityIndicator/> : (
                  <>
                  {/* <TouchableOpacity onPress={() => { 
                    setOverlayVisible(true)}}>
                      <Text>Hi</Text>
                  </TouchableOpacity> */}
                  <Dropdown
                  value={selectedCountry.Country}
                  label='Countries'
                    containerStyle={{width: 350}}
                    fontSize={18}
                    dropdownPosition={0} 
                    itemCount={10}
                    data={ getCountryNamesForDropdownMenu() }
                    onChangeText={item => setSelectedCountry(item)}
                    
                    />

                    <Text>New Cases: {selectedCountry.NewConfirmed}</Text>
                    <Text>New Recovered: {selectedCountry.NewRecovered}</Text>
                    <Text>New Deaths: {selectedCountry.NewDeaths}</Text>
                    <Text>Total Cases: {selectedCountry.TotalConfirmed}</Text>
                    <Text>Total Recovered: {selectedCountry.TotalRecovered}</Text>
                    <Text>Total Deaths: {selectedCountry.TotalDeaths}</Text>
                </>
                )}
                </View>
                
            </ScrollView>
            );
    
    
}

const styles = StyleSheet.create({

    indicator: {
        flex: 1, 
        padding: 24 
    },

    instructions: {
        textAlign: 'center',
        color: '#333333',
        margin: 5,
        fontSize: 20,
    },

    instructions_click: {
        textAlign: 'center',
        color: '#333333',
        
        marginTop: 25,
        fontSize: 16,
        fontWeight: 'bold',
    },


    })      

export default CountriesContainer;