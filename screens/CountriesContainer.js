import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';



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
                <Text style={styles.date}>{new Date().toDateString()}</Text>
                <Text style={styles.welcome}>Welcome to the Covid19 Tracking App</Text>
                <Text style={styles.instructions}>A summary of the virus' impact on the global population.</Text>
                <Text style={styles.instructions1}>GLOBAL Cases: {globalData.TotalConfirmed} </Text>
                <Text style={styles.instructions2}>GLOBAL Recoveries: {globalData.TotalRecovered} </Text>
                <Text style={styles.instructions1}>GLOBAL Deaths: {globalData.TotalDeaths}</Text>
                
                {isLoading ? <ActivityIndicator/> : (
                    <Text style={styles.instructions_click}>Click on a Country below...</Text>
                )}
                </View>

                <View style={styles.indicator}>
                {isLoading ? <ActivityIndicator/> : (
                  <>
                  <Dropdown
                  value={selectedCountry.Country}
                  label='Countries'
                    containerStyle={styles.dropdown}
                    fontSize={18}
                    dropdownPosition={0} 
                    itemCount={10}
                    data={ getCountryNamesForDropdownMenu() }
                    onChangeText={item => setSelectedCountry(item)}
                    />
                    </>
                    )}
                    </View>

                    <View>
                    <Text style={styles.country_cases}>New Cases: {selectedCountry.NewConfirmed}</Text>
                    <Text style={styles.country_cases}>New Recovered: {selectedCountry.NewRecovered}</Text>
                    <Text style={styles.country_cases}>New Deaths: {selectedCountry.NewDeaths}</Text>
                    <Text style={styles.country_cases}>Total Cases: {selectedCountry.TotalConfirmed}</Text>
                    <Text style={styles.country_cases}>Total Recovered: {selectedCountry.TotalRecovered}</Text>
                    <Text style={styles.country_cases}>Total Deaths: {selectedCountry.TotalDeaths}</Text>
                    </View>
                
            </ScrollView>
            );
    
    
}

const styles = StyleSheet.create({

    dropdown: {
        width: 350,
        marginTop: 0,

    },

    country_cases: {
        marginLeft: 25,
        fontSize: 18,
    },

    indicator: {
        flex: 1, 
        padding: 24 
    },

    instructions1: {
        textAlign: 'center',
        backgroundColor: "#85c2d9",
        color: "#FFF",
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
        borderRadius: 50,
        marginBottom: 5,
        
    },
    instructions2: {
        textAlign: 'center',
        backgroundColor: "#723988",
        color: "#FFF",
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
        borderRadius: 15,
        marginBottom: 5,
    },

    instructions_click: {
        textAlign: 'center',
        color: 'white',
        marginTop: 25,
        marginBottom: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    welcome: {
        fontSize: 22,
        color: 'purple',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 20,
      },
      instructions: {
        textAlign: 'center',
        fontSize: 17,
        color: '#333333',
        margin: 10,
      },
      date: {
        marginTop: 15,
        fontSize: 18,
        color: 'white',
        textAlign: "center",
        fontWeight: 'bold'
      },


    })      

export default CountriesContainer;