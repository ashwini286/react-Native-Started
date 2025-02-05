import React from 'react'
import { Text, View, Button } from 'react-native'
const product = ({navigation}) => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', gap: 10}}> 
    
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          this is product page
        </Text>
        <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
        </View>
  )
}

export default product
