import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert, Button, TouchableOpacity, TouchableHighlight, Pressable,SafeAreaView } from 'react-native';

function index() {
  function handleonPress(){
    Alert.alert('You pressed the button!');
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text>index page is it</Text>
      <Button title='press me' style={styles.btn}></Button>
      <TouchableOpacity style={{ backgroundColor: 'red', padding: 10 , borderRadius: 10}} onPress={handleonPress}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Button</Text>
      </TouchableOpacity>

      <TouchableHighlight style={{ backgroundColor: 'yellow', padding: 10, borderRadius: 10 }} onPress={() => Alert.alert('You pressed the button!')}>
        <Text style={{ color: 'black', textAlign: 'center' }}>Button Highlight</Text>
      </TouchableHighlight>

      <Pressable style={{ backgroundColor: 'green', padding: 10, borderRadius: 10 }} onPress={() => Alert.alert('You pressed the button!')}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Pressable me</Text>
      </Pressable>


      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    justifyContent: 'center',
   
  },
  btn:{
    borderRadius: 10,
    backgroundColor: 'red',

  }
});

export default index;





