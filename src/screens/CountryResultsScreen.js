import React from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-elements';

const CountryResultsScreen = ({ route, navigation }) => {
    
    
    return (
            <View style={styles.results_screen_container}>
                <ScrollView>
                    <Text style={styles.date}>{new Date().toDateString()}</Text>
                    <Text style={styles.results_screen_title}>
                        Covid-19 Country results for:
                    </Text>
                    <Text style={styles.results_screen_title}>
                        {route.params.country.Country}
                    </Text>

                    <Divider style={styles.results_screen_title_divider}/>
                    <View style={styles.results_container}> 
                    <Text style={styles.country_cases}>
                        New Cases: {route.params.country.NewConfirmed}</Text>
                    <Text style={styles.country_recovered}>
                        New Recovered: {route.params.country.NewRecovered}</Text>
                    <Text style={styles.country_deaths}>
                        New Deaths: {route.params.country.NewDeaths}</Text>
                    <Text style={styles.country_cases}>
                        Total Cases: {route.params.country.TotalConfirmed}</Text>
                    <Text style={styles.country_recovered}>
                        Total Recovered: {route.params.country.TotalRecovered}</Text>
                    <Text style={styles.country_deaths}>
                        Total Deaths: {route.params.country.TotalDeaths}</Text>
                    </View>
                    <View style={styles.button_container}>
                    <TouchableOpacity
                        style={styles.results_button}
                        onPress={() => navigation.navigate('HomeScreen')}
                    >
                        <Text style={styles.results_button_text}>Home</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.results_button}
                        onPress={() => navigation.navigate('CountrySelectScreen')}
                    >
                        <Text style={styles.results_button_text}>New Search</Text>
                    </TouchableOpacity>
                    </View>
        
                    
                </ScrollView>
            </View>
        );
};

const styles = StyleSheet.create({
	results_screen_container: {
		flex: 1,
		alignItems: 'center',
		paddingVertical: 15,
		paddingHorizontal: 10,
		backgroundColor: '#73ffff',
    },

    results_screen_title: {
		marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
		color: 'black',
		textAlign: 'center',
    },

    results_screen_title_divider: {
		backgroundColor: 'black', 
        height: 1,
        marginTop: 10,
	},
    
    results_container: {
        paddingVertical: 30,
        paddingHorizontal: 5,
		backgroundColor: 'white',
		marginTop: 15,
		borderRadius: 20,
		borderWidth: 1,
        borderColor: 'blue',
        marginBottom: 10,
    },

    country_cases: {
        textAlign: 'center',
        backgroundColor: "#76a12c", 
        color: "#FFF",
        fontSize: 17,
        padding: 5,
        marginBottom: 10,
    },
    country_recovered: {
        textAlign: 'center',
        backgroundColor: "#723988", 
        color: "#FFF",
        fontSize: 17,
        padding: 5,
        marginBottom: 10,
    },
    country_deaths: {
        textAlign: 'center',
        backgroundColor: "#c62d83", 
        color: "#FFF",
        fontSize: 17,
        padding: 5,
        marginBottom: 10,
    },
    button_container: {
        flexDirection: 'row',
		alignSelf: 'center',
    },

    results_button: {
		borderWidth: 1,
		borderColor: 'white',
		backgroundColor: 'blue',
		borderRadius: 20,
        margin: 5,
        padding: 2,
		alignSelf: 'center',
		shadowRadius: 4,
		shadowOffset:{  width: 5,  height: 5,  },
		shadowColor: 'white',
        shadowOpacity: 3,
        minWidth: 120,
	},
	results_button_text: {
		fontWeight: 'bold',
		color: 'white',
		padding: 5,
		textAlign: 'center',
		fontSize: 16,
    },
    date: {
        fontSize: 14,
        color: 'black',
        textAlign: "center",
	},

})



export default CountryResultsScreen;
