import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, ScrollView } from 'react-native';
import { Divider } from 'react-native-elements';

const HomeScreen = ({ navigation }) => {

	const [ countriesArrayList, setCountriesArrayList ] = useState( [] )
    const [ globalData, setGlobalData ] = useState( {} )
	const [ selectedCountry, setSelectedCountry ] = useState( "" )
	
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
                        onPress={() => navigation.navigate('CountrySelectScreen')}
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
		marginTop: 15,
		fontSize: 28,
		fontWeight: 'bold',
		color: 'black',
		textAlign: 'center',
	},

	home_screen_title_divider: {
		backgroundColor: 'black', 
        height: 5,
        marginTop: 10,
	},

	home_screen_text_container: {
		padding: 10,
		backgroundColor: 'white',
		marginTop: 30,
		borderRadius: 20,
		borderWidth: 1,
		borderColor: 'blue',
	},

	home_screen_text: {
		fontSize: 24,
		color: 'blue',
		textAlign: 'center',
		marginTop: 10,
		marginBottom: 10,
		padding: 10,
	},

	global_stats_container:{
		marginTop: 20,
		alignItems: 'center',
		backgroundColor: 'white',
		borderRadius: 20,
		borderWidth: 1,
		borderColor: 'blue',
	},

	global_stats_title: {
		fontSize: 22,
		fontWeight: 'bold',
		padding: 10,
	},

	date: {
        fontSize: 18,
        color: 'black',
        textAlign: "center",
        fontWeight: 'bold',
        marginTop: 5,
	},
	  
	global_cases: {
        textAlign: 'center',
        backgroundColor: "#76a12c", 
        color: "#FFF",
        fontSize: 18,
        fontWeight: 'bold',
        padding: 5,
		marginBottom: 5,
		marginTop: 10, 
		width: '65%',
	},
	global_recoveries: {
        textAlign: 'center',
        backgroundColor: "#723988",
        color: "#FFF",
        fontSize: 18,
        fontWeight: 'bold',
        padding: 5,
		marginBottom: 5,
		width: '65%',
	},
	
	global_deaths: {
        textAlign: 'center',
        backgroundColor: "#c62d83",
        color: "#FFF",
        fontSize: 18,
        fontWeight: 'bold',
        padding: 5,
		marginBottom: 10,
		width: '65%',
    },

	start_country_select_button: {
		borderWidth: 2,
		borderColor: 'white',
		backgroundColor: 'blue',
		borderRadius: 8,
		marginTop: 50,
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
		fontSize: 22,
	},
});



export default HomeScreen;
