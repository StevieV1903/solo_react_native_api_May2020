import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';


const countriesContainer = () => {

    const [isLoading, setLoading] = useState( true )
    const [countriesList, setCountriesList] = useState( [] )
    const [globalData, setGlobalData] = useState( {} )
    const [selectedCountry, setSelectedCountry] = useState( "" );
    

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
                <Text style={styles.instructions}>Total confirmed GLOBAL cases: {globalData.TotalConfirmed}</Text>
                <Text style={styles.instructions}>Total confirmed GLOBAL deaths: {globalData.TotalDeaths}</Text>
                <Text style={styles.instructions}>Total confirmed GLOBAL recoveries: {globalData.TotalRecovered}</Text>
                {isLoading ? <ActivityIndicator/> : (
                    <Text style={styles.instructions_click}>Click on a Country below...</Text>
                )}
            
                </View>
                <View style={styles.indicator}>
                {isLoading ? <ActivityIndicator/> : (
                  <>
                  <Dropdown
                  value={selectedCountry}
                  label='Countries'
                    containerStyle={{width: 350}}
                    dropdownPosition={0} 
                    itemCount={10}
                    data={ getCountryNamesForDropdownMenu() }
                    onChangeText={item => setSelectedCountry(item)}
                  />
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
        fontSize: 16,
    },

    instructions_click: {
        textAlign: 'center',
        color: '#333333',
        margin: 5,
        fontSize: 16,
        fontWeight: 'bold',
    },


    })      

export default countriesContainer;

{/* <Dropdown 
                value={frequencyType}
                label= "Frequency"
                containerStyle={{width: 100}}
                dropdownPosition={0} 
                data={[
                  {value: "Days"}, 
                  {value: "Weeks"}, 
                  {value: "Months"}
                ]}
                onChangeText={itemValue => setFrequencyType(itemValue)}
              /> */}