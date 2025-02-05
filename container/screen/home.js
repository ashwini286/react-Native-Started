import React from 'react'
import { Button, Text, View } from 'react-native'
const home = ({navigation}) => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', gap: 10}}> 

    <Text style={{fontSize: 20, fontWeight: 'bold'}}>
      this is home page
    </Text>
    <Button title="Go to Product" onPress={() => navigation.navigate('Product')} />
    </View>
  )
}

export default home
