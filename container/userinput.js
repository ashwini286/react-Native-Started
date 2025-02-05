import React from 'react'
import { SafeAreaView, Text, StyleSheet, TextInput, Button,  } from 'react-native'

const userinput = () => {
    const [name, setName] = React.useState('')
    const [submitted, setSubmitted] = React.useState('')
    const handleSubmit = () => {
        setSubmitted(name)
        setName("")
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ fontSize: 30 }}>hi this is userInput  </Text>
            <TextInput style={styles.inputStyle}
            value={name}
            onChangeText={(name) => setName(name)}
             placeholder='Enter your name'
             multiline
             numberOfLines={1}
             />
            
            <Button title='submit' style={styles.btn}
            onPress={handleSubmit}
            >Submit me</Button>
            {submitted ? (<Text style={{ fontSize: 20 }}>Your name is: {submitted}</Text>):null}
        </SafeAreaView>
    )
}

export default userinput
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: "100%"

    },
    btn: {
        borderRadius: 10,
        backgroundColor: 'red',

    },
    inputStyle: {
        borderWidth: 1, borderColor: 'black', width: 200, height: 40, borderRadius: 10, padding: 10, margin: 10
    }
});
