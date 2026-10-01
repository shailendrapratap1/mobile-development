// // import { Text, View, TextInput, Image, Pressable, ScrollView, Button, StyleSheet } from 'react-native'
// // import React from 'react'

// // const Index = () => {
// //   return (
// //     <ScrollView>
// //       {/* <Text>index</Text>
// //       <View>
// //         <Text>Hello world</Text>
// //       </View> */}
// //       <Image
// //         source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
// //         style={{ width: 100, height: 100 }}
// //       />
// //       <Button
// //         onPress={() => alert("Button Pressed!")}
// //         title="Learn More"
// //         color="#841584"

// //         accessibilityLabel='learn more about this purple button' />

// //       <TextInput
// //         placeholder='Enter your name'
// //         style={{ borderWidth: 1, padding: 10 }}
// //       />
// //       <Pressable onPress={() => alert("Button Pressed!")}>
// //         <Text style={styles.text}>Click me</Text>
// //       </Pressable>

// //       <Text>index</Text>
// //       <Text>index</Text>
// //       <Text>index</Text>
// //       <Text>index</Text>
// //       <Text>index</Text>
// //       <Text>index</Text>


// //       <Text>index</Text>
// //       <Text>index</Text>
// //       <Text>index</Text>
// //       <Text>index</Text>
// //       <Text>index</Text>
// //       <Text>index</Text>
// //       <Text>index</Text>
// //       <Text>index</Text>
// //       <Text>index</Text>
// //       <Text>index</Text>
// //       <Text>index</Text>
// //       <Text>index</Text>
// //       <Text>index</Text>
// //       <Text>index</Text>
// //       <Text>index</Text>
// //       <Text>index</Text>
// //       <Text>index</Text>
// //       <Text>index</Text>
// //       <Text>index</Text>
// //       <Text>index</Text>
// //       <Text>index</Text>
// //       <Text>index</Text>
// //       <Text>index</Text>
// //       <Text>index</Text>

// //       <Text>index</Text>
// //       <Text>index</Text>
// //       <Text>index</Text>
// //       <Text>index</Text>
// //       <Text>index</Text>
// //       <Text>index</Text>
// //       <Text>index</Text>
// //       <Text>index</Text>
// //       <Text>index</Text>
// //       <Text>index</Text>
// //       <Text>index</Text>
// //       <Text>index</Text>
// //       <Text>index</Text>
// //       <Text>index</Text>
// //       <Text>index</Text>
// //       <Text>index</Text>
// //       <Text>index</Text>

// //       <View style={styles.container}>

// //       </View>
// //     </ScrollView>
// //   )
// // }

// // export default Index;

// // const styles = StyleSheet.create({
// //   container: {
// //     padding: 20,
// //   },
// //   text: {
// //     fontSize: 18,
// //     color: "red"
// //   }
// // })

// import React from 'react'
// import { StyleSheet, Text, View,Image } from 'react-native'

// const Index = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>React Native Styling</Text>
//   <Image
//         source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
//         style={{ width: 100, height: 100 }}
//       />
//       <View style={styles.card}>
//         <Text style={styles.text}>This is a card Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus temporibus aspernatur dolorem sequi exercitationem illum nobis autem quia, vero corrupti sit quam illo distinctio mollitia placeat ad velit possimus! Distinctio, reiciendis!</Text>
//       </View>
//     </View>
//   )
// }


// //1. layout props (flexbox)
// export default Index

// const styles = StyleSheet.create({
//   image:{
//     width:100,
//     height:100,
    
//   },
//   container: {
//     flex: 1,
//     backgroundColor: "#f5f5f5",
//     padding: 20,
//     margin:20,
//     justifyContent:"center",
//     alignItems:"center"
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   card: {
//     backgroundColor: '#a9cb2dff',
//     padding: 20,
//     borderRadius: 10,

//     //android shadow 
//     elevation:5,
    
//     //ios shadow
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     alignItems:"center", //horizontal alignment
//     justifyContent:"center"  //vertical alignment
//   },
//   text: {
//     fontSize: 24,
//     color: '#11278bff',
//     fontWeight:"800",
   
//     textAlign:"right"
//   },
// })

import React from 'react';
import { FlatList, Image, SectionList, StyleSheet, Text, View } from 'react-native';


const vegetables = [
  {
    id: '1',
    name: 'Tomato',
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=100&auto=format&fit=crop&q=60',
  },
  {
    id: '2',
    name: 'Carrot',
    image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=100&auto=format&fit=crop&q=60',
  },
  {
    id: '3',
    name: 'Broccoli',
    image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=100&auto=format&fit=crop&q=60',
  },
  {
    id: '4',
    name: 'Potato',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=100&auto=format&fit=crop&q=60',
  },
  {
    id: '5',
    name: 'Onion',
    image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=100&auto=format&fit=crop&q=60',
  },
  {
    id: '6',
    name: 'Bell Pepper',
    image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=100&auto=format&fit=crop&q=60',
  },
  {
    id: '7',
    name: 'Cucumber',
    image: 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=100&auto=format&fit=crop&q=60',
  },
  {
    id: '8',
    name: 'Spinach',
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=100&auto=format&fit=crop&q=60',
  },
];

const Index = () => {
  return (
   <View>
    <FlatList 
    
    data={vegetables}
    keyExtractor={(item) => item.id}
    renderItem={({item}) => (
      <View style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.title}>{item.name}</Text>
      </View>
    )}

   
    ListHeaderComponent={()=><Text>Header</Text>}
    ListFooterComponent={()=><Text>Footer</Text>}
    ItemSeparatorComponent={()=><View style={{height:1,backgroundColor:"#ccc"}}/>}

    />
    </View>

   
  )
}

export default Index

const styles = StyleSheet.create({
  header: { fontSize: 22, fontWeight: "bold", margin: 8 },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    margin: 5,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  image: { width: 35, height: 35, marginRight: 10 },
  title: { fontSize: 18 },
});