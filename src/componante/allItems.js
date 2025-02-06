// import React, { useEffect, useState } from 'react'
// import { Text, View, StyleSheet } from 'react-native'
// import AsyncStorage from '@react-native-async-storage/async-storage'

// const AllItems = () => {
//   const [toys, setToys] = useState([])
//   const [lowStock, setLowStock] = useState()

//   // Load data from AsyncStorage on component mount
//   useEffect(() => {
//     const loadToys = async () => {
//       try {
//         const savedToys = await AsyncStorage.getItem('toys')
//         if (savedToys) {
//           setToys(JSON.parse(savedToys))
//         }
//       } catch (error) {
//         console.error('Failed to load toys:', error)
//       }
//     }
//     loadToys()
//   }, [])

//   return (
//     <View style={styles.container}>
//       <Text style={{ textAlign: "left", fontWeight: 'bold', fontSize: 20, paddingLeft: 5 }}>All Items</Text>
      
//       {/* Display all items */}
//       {toys.map((toy) => (
//         <View key={toy.id} style={styles.title3}>
//           <Text style={{ flex: 1 }}>{toy.name} - {toy.price}</Text>
//         </View>
//       ))}
//     </View>
//   )
// }

// export default AllItems

// const styles = StyleSheet.create({
//   container: {
//     width: '100%',
//     height: '100%',
//     paddingTop: 20,
//     paddingLeft: 0,
//     paddingRight: 15,
//     backgroundColor: '#ffffff',
//     gap: 10
//   },
//   title3: {
//     fontSize: 16,
//     borderColor: 'green',
//     borderWidth: 1,
//     padding: 10,
//     borderRadius: 25,
//     backgroundColor: 'lightyellow',
//     color: 'black',
//     fontWeight: 'lighter',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between'
//   },
// })



import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AllItems = () => {
  const [toys, setToys] = useState([]);
  const [lowStock, setLowStock] = useState([]);

  // Load data from AsyncStorage on component mount
  useEffect(() => {
    const loadToys = async () => {
      try {
        const savedToys = await AsyncStorage.getItem('toys');
        if (savedToys) {
          const parsedToys = JSON.parse(savedToys);
          setToys(parsedToys);
          
          // Filter toys with price below $20 and update lowStock state
          const filteredLowStock = parsedToys.filter(toy => toy.price < 20);
          setLowStock(filteredLowStock);

          // Save low stock items in AsyncStorage
          await AsyncStorage.setItem('lowStock', JSON.stringify(filteredLowStock));
        }
      } catch (error) {
        console.error('Failed to load toys:', error);
      }
    };
    loadToys();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'left', fontWeight: 'bold', fontSize: 20, paddingLeft: 5 }}>All Items</Text>
      
      {/* Display all items */}
      {toys.map((toy) => (
        <View key={toy.id} style={styles.title3}>
          <Text style={{ flex: 1 }}>{toy.name} - {toy.price}</Text>
        </View>
      ))}
    </View>
  );
};

export default AllItems;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingTop: 20,
    paddingLeft: 0,
    paddingRight: 15,
    backgroundColor: '#ffffff',
    gap: 10,
  },
  title3: {
    fontSize: 16,
   
    padding: 10,
    borderRadius: 25,
    backgroundColor: 'lightyellow',
    color: 'black',
    fontWeight: 'lighter',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
