import React from 'react'
import { Pressable, Text, View,StyleSheet } from 'react-native'
import Create from './create';
import LowStock from './lowStock';
import AllItems from './allItems';
const home = () => {
   const [selectedItem, setSelectedItem] = React.useState('AllItems');
  return (
    <View style={styles.container}>
     <Text style={styles.title}>Dashboard</Text>
     <View style={styles.buttoncontainer}>
        <Pressable style={styles.button} onPress={()=>setSelectedItem('AllItems')}>
            <Text style={styles.buttontext}>All Items</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={()=>setSelectedItem('LowStock')}>
            <Text style={styles.buttontext}>Low Stock</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={()=>setSelectedItem('Create')}>
            <Text style={styles.buttontext}>Create</Text>
        </Pressable>
     </View>
     <View style={styles.content}>
                {selectedItem === 'AllItems' && <AllItems />}
                {selectedItem === 'LowStock' && <LowStock />}
                {selectedItem === 'Create' && <Create />}
            </View>
    </View>
  )
}

export default home
const styles = StyleSheet.create({  
    container:{
        width: '100%',
        height: '100%',
        paddingTop: 60,
        paddingLeft: 20,
        backgroundColor: '#ffffff',
    }, 
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    buttoncontainer:{
        flexDirection: 'row',
        gap: 10,
    },
    button:{
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 50,
        borderColor: 'green',
        borderWidth: 1,
    },
    buttontext:{
        color: 'green',
        fontWeight: 'bold',
    }
})