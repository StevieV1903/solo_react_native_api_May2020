import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { Divider } from 'react-native-elements';



const CountriesContainer = () => {

    const [countriesList, setCountriesList] = useState( [] )
    const [globalData, setGlobalData] = useState( {} )
    const [selectedCountry, setSelectedCountry] = useState( "" )
    

    useEffect(() => {
        
        fetch('https://api.covid19api.com/summary')
            .then (( response ) => response.json())
            .then (( dataReturnedFromFetch ) => {
                setGlobalData( dataReturnedFromFetch.Global)
                return dataReturnedFromFetch
            })
            .then(( dataReturnedFromFetch ) => {
                setCountriesList( dataReturnedFromFetch.Countries )
                return dataReturnedFromFetch 
            })
            // .catch((error) => console.error( error ))
            // .then(() => setLoading( false ))
    }, []);


    const getCountryNamesForDropdownMenu = () => {
        const countryNames = countriesList.map((countryObject) => {
            return {value: countryObject, label: countryObject.Country}
        })
        return countryNames;

    }

    return (
             
             <ScrollView>
                {/* { !isLoading &&  */}
                <View style={styles.indicator}>
                    <Text style={styles.date}>{new Date().toDateString()}</Text>
                        <Divider style={styles.divider} />
                            <Text style={styles.welcome}>Welcome to the Covid19 Tracking App</Text>
                            <Text style={styles.instructions}>A summary of the virus' impact on countries around the world.</Text>
                            <Text style={styles.instructions1}>Cases: {globalData.TotalConfirmed} </Text>
                            <Text style={styles.instructions2}>Recoveries: {globalData.TotalRecovered} </Text>
                            <Text style={styles.instructions3}>Deaths: {globalData.TotalDeaths}</Text>
                            <Text style={styles.instructions_click}>Pick a Country below...</Text>
                            
                            
                            {/* {isLoading ? <ActivityIndicator/> : (
                            <Text style={styles.instructions_click}>Pick a Country below...</Text>
                )} */}
                    </View>
                    {/* } */}

                    <View style={styles.indicator}>
                        {/* {isLoading ? <ActivityIndicator/> : ( */}

                  <Dropdown
                        containerStyle={styles.dropdown}      
                        value={selectedCountry.Country}
                        label='Pick a Country'
                        dropdownOffset={{top:10, left:15}}
                        fontSize={16}
                        labelFontSize={18}
                        itemPadding={5}
                        baseColor={'black'}
                        itemCount={8}
                        data={ getCountryNamesForDropdownMenu() }
                        onChangeText={item =>
                            setSelectedCountry(item) }
                               
                    />
                    {/* )} */}
                    
                    </View>

                    
                    { selectedCountry.Country && 
                    <View style={styles.indicator}>
                    <Text style={styles.country_cases}>New Cases: {selectedCountry.NewConfirmed}</Text>
                    <Text style={styles.country_recovered}>New Recovered: {selectedCountry.NewRecovered}</Text>
                    <Text style={styles.country_deaths}>New Deaths: {selectedCountry.NewDeaths}</Text>
                    <Text style={styles.country_cases}>Total Cases: {selectedCountry.TotalConfirmed}</Text>
                    <Text style={styles.country_recovered}>Total Recovered: {selectedCountry.TotalRecovered}</Text>
                    <Text style={styles.country_deaths}>Total Deaths: {selectedCountry.TotalDeaths}</Text>
                    </View>}
                    
                
            </ScrollView>
            );
    
    
}

const styles = StyleSheet.create({

    dropdown: {
        height: "100%",
        width: "95%",
        marginTop: 20,
        marginBottom: 20,
    },
    country_cases: {
        textAlign: 'center',
        backgroundColor: "#76a12c", 
        color: "#FFF",
        fontSize: 14,
        fontWeight: 'bold',
        padding: 5,
        marginBottom: 5,
    },
    country_recovered: {
        textAlign: 'center',
        backgroundColor: "#723988", 
        color: "#FFF",
        fontSize: 14,
        fontWeight: 'bold',
        padding: 6,
        marginBottom: 5,
    },
    country_deaths: {
        textAlign: 'center',
        backgroundColor: "#c62d83", 
        color: "#FFF",
        fontSize: 14,
        fontWeight: 'bold',
        padding: 6,
        marginBottom: 5,
    },

    // indicator: {
    //     flex: 1, 
    //     padding: 12,
    //     marginRight: 15, 
    //     marginLeft: 15,
    // },

    instructions1: {
        textAlign: 'center',
        backgroundColor: "#76a12c", 
        color: "#FFF",
        fontSize: 16,
        fontWeight: 'bold',
        padding: 8,
        marginBottom: 5,
        
    },
    instructions2: {
        textAlign: 'center',
        backgroundColor: "#723988",
        color: "#FFF",
        fontSize: 16,
        fontWeight: 'bold',
        padding: 8,
        marginBottom: 5,
    },

    instructions3: {
        textAlign: 'center',
        backgroundColor: "#c62d83",
        color: "#FFF",
        fontSize: 16,
        fontWeight: 'bold',
        padding: 8,
        marginBottom: 5,
    },

    instructions_click: {
        textAlign: 'center',
        color: 'black',
        marginTop: 25,
        fontSize: 18,
        fontWeight: 'bold',
    },
    welcome: {
        fontSize: 18,
        color: 'purple',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 20,
      },
      instructions: {
        textAlign: 'center',
        fontSize: 16,
        color: 'black',
        margin: 10,
        fontWeight: 'bold',
        marginBottom: 25
      },
      date: {
        fontSize: 18,
        color: 'black',
        textAlign: "center",
        fontWeight: 'bold',
        opacity: 1,
        marginTop: 30,
      },

      divider: {
        backgroundColor: 'white', 
        height: 2,
        marginTop: 10,

      },


    })      

export default CountriesContainer;