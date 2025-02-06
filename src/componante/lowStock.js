import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LowStock = () => {
  const [lowStock, setLowStock] = useState([]);

  // Load low stock data from AsyncStorage
  useEffect(() => {
    const loadLowStock = async () => {
      try {
        const savedLowStock = await AsyncStorage.getItem('lowStock');
        if (savedLowStock) {
          setLowStock(JSON.parse(savedLowStock));
        }
      } catch (error) {
        console.error('Failed to load low stock items:', error);
      }
    };
    loadLowStock();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ textAlign: "left", fontWeight: 'bold', fontSize: 20, paddingLeft: 5 }}>Low Stock</Text>
      
      {/* Display low stock items */}
      {lowStock.length > 0 ? (
        lowStock.map((toy) => (
          <Text key={toy.id} style={styles.title}>{toy.name} - {toy.price}</Text>
        ))
      ) : (
        <Text style={styles.error}>No low stock items</Text>
      )}
    </View>
  );
};

export default LowStock;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingTop: 20,
    paddingLeft: 0,
    paddingRight: 15,
    backgroundColor: '#ffffff',
    gap: 10
  },
  error: {
    color: 'red',
    textAlign: 'center',
    fontSize: 16,
  },
  title: {
    fontSize: 16,
    padding: 10,
    borderRadius: 25,
    backgroundColor: "red",
    color: 'white',
    fontWeight: 'lighter',
  },
});
