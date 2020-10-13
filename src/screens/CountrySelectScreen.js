import React, {useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

const CountrySelectScreen = ({ route, navigation }) => {

    const [ countriesArrayList, setCountriesArrayList ] = useState( route.params.countriesArrayList )
    // const [ selectedCountry, setSelectedCountry ] = useState( "" )


    const getCountryNamesForDropdownMenu = () => {
        const countryNames = countriesArrayList.map((countries) => {
            return {value: countries, label: countries.Country}
             })
        return countryNames;
    }

    

    // console.log(countriesArrayList)
    
    
    return (
            <View style={styles.select_screen_container}>
                <ScrollView>
                    <View style={styles.select_text_container}>
                    <Text style={styles.select_screen_text}>
                        Pick a Country from the dropdown list below to find out more information about how it has been affected by Covid-19
                    </Text>
                    </View>
                    <View>
                    <Dropdown
                        containerStyle={styles.select_dropdown}      
                        label='Pick a Country'
                        dropdownOffset={{top:50, left:20}}
                        fontSize={16}
                        labelFontSize={16}
                        itemPadding={5}
                        baseColor={'black'}
                        itemCount={12}
                        itemColor={'grey'}
                        data={ getCountryNamesForDropdownMenu() }
                        onChangeText={item => 
                            {navigation.navigate('CountryResultsScreen', {country : item})
                            }}
                               
                    />
                    </View>
                </ScrollView>
            </View>
        );
};

const styles = StyleSheet.create({
	select_screen_container: {
		flex: 1,
		alignItems: 'center',
		paddingVertical: 15,
		paddingHorizontal: 10,
		backgroundColor: '#73ffff',
    },
    
    select_text_container: {
        padding: 5,
		backgroundColor: 'white',
		marginTop: 10,
		borderRadius: 20,
		borderWidth: 1,
		borderColor: 'blue',
    },

    select_screen_text: {
		fontSize: 16,
		color: 'blue',
		textAlign: 'center',
		marginTop: 5,
		marginBottom: 5,
		padding: 5,
    },
    
    select_dropdown: {
        height: "100%",
        width: "95%",
    },

    

});

export default CountrySelectScreen;
