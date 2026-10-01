// import { Text, View, TextInput, Image, Pressable, ScrollView, Button, StyleSheet } from 'react-native'
// import React from 'react'

// const Index = () => {
//   return (
//     <ScrollView>
//       {/* <Text>index</Text>
//       <View>
//         <Text>Hello world</Text>
//       </View> */}
//       <Image
//         source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
//         style={{ width: 100, height: 100 }}
//       />
//       <Button
//         onPress={() => alert("Button Pressed!")}
//         title="Learn More"
//         color="#841584"

//         accessibilityLabel='learn more about this purple button' />

//       <TextInput
//         placeholder='Enter your name'
//         style={{ borderWidth: 1, padding: 10 }}
//       />
//       <Pressable onPress={() => alert("Button Pressed!")}>
//         <Text style={styles.text}>Click me</Text>
//       </Pressable>

//       <Text>index</Text>
//       <Text>index</Text>
//       <Text>index</Text>
//       <Text>index</Text>
//       <Text>index</Text>
//       <Text>index</Text>


//       <Text>index</Text>
//       <Text>index</Text>
//       <Text>index</Text>
//       <Text>index</Text>
//       <Text>index</Text>
//       <Text>index</Text>
//       <Text>index</Text>
//       <Text>index</Text>
//       <Text>index</Text>
//       <Text>index</Text>
//       <Text>index</Text>
//       <Text>index</Text>
//       <Text>index</Text>
//       <Text>index</Text>
//       <Text>index</Text>
//       <Text>index</Text>
//       <Text>index</Text>
//       <Text>index</Text>
//       <Text>index</Text>
//       <Text>index</Text>
//       <Text>index</Text>
//       <Text>index</Text>
//       <Text>index</Text>
//       <Text>index</Text>

//       <Text>index</Text>
//       <Text>index</Text>
//       <Text>index</Text>
//       <Text>index</Text>
//       <Text>index</Text>
//       <Text>index</Text>
//       <Text>index</Text>
//       <Text>index</Text>
//       <Text>index</Text>
//       <Text>index</Text>
//       <Text>index</Text>
//       <Text>index</Text>
//       <Text>index</Text>
//       <Text>index</Text>
//       <Text>index</Text>
//       <Text>index</Text>
//       <Text>index</Text>

//       <View style={styles.container}>

//       </View>
//     </ScrollView>
//   )
// }

// export default Index;

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   text: {
//     fontSize: 18,
//     color: "red"
//   }
// })

import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

const Index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Styling</Text>
  <Image
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        style={{ width: 100, height: 100 }}
      />
      <View style={styles.card}>
        <Text style={styles.text}>This is a card Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus temporibus aspernatur dolorem sequi exercitationem illum nobis autem quia, vero corrupti sit quam illo distinctio mollitia placeat ad velit possimus! Distinctio, reiciendis!</Text>
      </View>
    </View>
  )
}


//1. layout props (flexbox)
export default Index

const styles = StyleSheet.create({
  image:{
    width:100,
    height:100,
    
  },
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
    margin:20,
    justifyContent:"center",
    alignItems:"center"
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#a9cb2dff',
    padding: 20,
    borderRadius: 10,

    //android shadow 
    elevation:5,
    
    //ios shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    alignItems:"center", //horizontal alignment
    justifyContent:"center"  //vertical alignment
  },
  text: {
    fontSize: 24,
    color: '#11278bff',
    fontWeight:"800",
   
    textAlign:"right"
  },
})