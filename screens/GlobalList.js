// import React, { useEffect, useState } from 'react';
// import {ActivityIndicator, FlatList, Text, View, StyleSheet} from 'react-native'


// const GlobalList = () => {

//     const [isLoading, setLoading] = useState( true )
//     const [globalList, setGlobalList] = useState( {} )
    

//     useEffect(() => {
//         fetch('https://api.covid19api.com/summary')
//             .then (( response ) => response.json())
//             .then((json) => setGlobalList( json.Global ))
//             .catch((error) => console.error( error ))
//             .finally(() => setLoading( false ));
//     }, []);


//     return (
//               <View style={styles.indicator}>
//                 {isLoading ? <ActivityIndicator/> : (
//                   <FlatList
//                     data={globalList}
//                     // keyExtractor={({ CountryCode }, index) => CountryCode}
//                     renderItem={({ item }) => (
//                       <Text>{item.NewConfirmed}</Text>
//                     )}
//                   />
//                 )}
//               </View>
//             );
    
    
// }

// const styles = StyleSheet.create({

//     indicator: {
//         flex: 1, 
//         padding: 24 },
//     })      

// export default GlobalList;