import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, ScrollView } from 'react-native';
import { Divider } from 'react-native-elements';

const HomeScreen = ({ navigation }) => {

	const [ countriesArrayList, setCountriesArrayList ] = useState( [] )
    const [ globalData, setGlobalData ] = useState( {} )
	
	
// This fetches two lots of data, the global object data and then the countries array list
	useEffect(() => {
        
        fetch('https://api.covid19api.com/summary')
            .then (( response ) => response.json())
            .then (( dataReturnedFromFetch ) => {
                setGlobalData( dataReturnedFromFetch.Global)
                return dataReturnedFromFetch
            })
            .then(( dataReturnedFromFetch ) => {
                setCountriesArrayList( dataReturnedFromFetch.Countries )
                return dataReturnedFromFetch 
			})
			
			.catch((error) => console.error( error ))
    
	}, []);
	
    
    
    return (
            <View style={styles.home_screen_container}>
                <ScrollView>
					
					<Text style={styles.home_screen_title}>COVID-19 Global Tracker</Text>
						<Divider style={styles.home_screen_title_divider}/>
						<View style={styles.home_screen_text_container}>
						<Text style={styles.home_screen_text}>
							Welcome to my COVID-19 Global Tracker, the app that highlights the global impact of the Corona Virus.
						</Text>

						</View>
							<View style={styles.global_stats_container}>
							<Text style={styles.global_stats_title}>Global Corona Virus Statistics</Text>
							<Text style={styles.date}>as of {new Date().toDateString()} there have been:</Text>
							<Text style={styles.global_cases}>Cases: {globalData.TotalConfirmed} </Text>
                            <Text style={styles.global_recoveries}>Recoveries: {globalData.TotalRecovered} </Text>
                            <Text style={styles.global_deaths}>Deaths: {globalData.TotalDeaths}</Text>
							</View>

                    <TouchableOpacity
                        style={styles.start_country_select_button}
                        onPress={() => navigation.navigate('CountrySelectScreen', { countriesArrayList: countriesArrayList })}
                    >
                        <Text style={styles.start_country_select_button_text}>Search Countries</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
};

const styles = StyleSheet.create({
	home_screen_container: {
		flex: 1,
		alignItems: 'center',
		paddingVertical: 15,
		paddingHorizontal: 10,
		backgroundColor: '#73ffff',
	},

	home_screen_title: {
		marginTop: 10,
		fontSize: 20,
		fontWeight: 'bold',
		color: 'black',
		textAlign: 'center',
	},

	home_screen_title_divider: {
		backgroundColor: 'black', 
        height: 1,
        marginTop: 5,
	},

	home_screen_text_container: {
		padding: 5,
		backgroundColor: 'white',
		marginTop: 15,
		borderRadius: 20,
		borderWidth: 1,
		borderColor: 'blue',
	},

	home_screen_text: {
		fontSize: 16,
		color: 'blue',
		textAlign: 'center',
		marginTop: 5,
		marginBottom: 5,
		padding: 5,
	},

	global_stats_container:{
		marginTop: 20,
		alignItems: 'center',
		backgroundColor: 'white',
		borderRadius: 20,
		borderWidth: 1,
		borderColor: 'blue',
		padding: 10,
	},

	global_stats_title: {
		fontSize: 18,
		fontWeight: 'bold',
		padding: 10,
		textAlign: 'center',
	},

	date: {
        fontSize: 14,
        color: 'black',
        textAlign: "center",
        fontWeight: 'bold',
        marginTop: 5,
	},
	  
	global_cases: {
        textAlign: 'center',
        backgroundColor: "#76a12c", 
        color: "#FFF",
        fontSize: 17,
        padding: 5,
		marginBottom: 5,
		marginTop: 10, 
		width: '90%',
	},
	global_recoveries: {
        textAlign: 'center',
        backgroundColor: "#723988",
        color: "#FFF",
        fontSize: 17,
        padding: 5,
		marginBottom: 5,
		width: '90%',
	},
	
	global_deaths: {
        textAlign: 'center',
        backgroundColor: "#c62d83",
        color: "#FFF",
        fontSize: 17,
        padding: 5,
		marginBottom: 10,
		width: '90%',
    },

	start_country_select_button: {
		borderWidth: 1,
		borderColor: 'white',
		backgroundColor: 'blue',
		borderRadius: 20,
		marginTop: 20,
		width: 250,
		alignSelf: 'center',
		shadowRadius: 4,
		shadowOffset:{  width: 5,  height: 5,  },
		shadowColor: 'white',
		shadowOpacity: 3,
	},
	start_country_select_button_text: {
		fontWeight: 'bold',
		color: 'white',
		padding: 5,
		textAlign: 'center',
		fontSize: 16,
	},
});



export default HomeScreen;
