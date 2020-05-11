// import React, { useState } from 'react';
// import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
// import { Overlay } from 'react-native-elements';



// const CountryDetailOverlay = ({ overlayVisible, setOverlayVisible }) => {

//     // const [overlayVisible, setOverlayVisible] = useState(false)



//     return (
//         <Overlay isVisible={overlayVisible}>
//         <View>
//         <TouchableOpacity 
//             style={styles.close_button} 
//             onPress={() => { 
//               setOverlayVisible(false) 
            
//             }}>
//                 <Text style={styles.button_text}> Close </Text>
//           </TouchableOpacity>
//           </View>
//           </Overlay>
//     )
// }

// const styles = StyleSheet.create({
//     close_button: {
//         marginHorizontal: 30,
//         marginTop: 10,
//         borderRadius: 8,
//         height: 50,
//         alignItems: "center",
//         justifyContent: "center",
//         backgroundColor: "red",
//     },
// })

// export default CountryDetailOverlay;