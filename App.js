import React, { useState, Component } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';



export default function App() {
  const [number1, setNumber1] = useState("Number Of Tickets");
  const [number2, setNumber2] = useState(99.99);
  const [total, setTotal] = useState(0 * number2);

  function calculateTicketCost() {
    setTotal(number1 * number2);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titleBlank}>
        Ticket Vault
      </Text>
      <Text style={styles.title}>
        Ticket Vault
      </Text>
      <TextInput style={styles.input1}
        underlineColorAndroid = "transparent"
        placeholder='Number of Tickets'
        onChangeText = {setNumber1}
      />

      <TouchableOpacity onPress={calculateTicketCost} style={styles.button}>
        <Text style={styles.buttonText}>Find The Cost</Text>
      </TouchableOpacity>
      <Text style={styles.instructions}>
        Ticket Cost: ${total.toFixed(2)}
      </Text>
      <View style={styles.container}>
        <Image source={{ uri: "https://media.istockphoto.com/photos/spectator-filming-concert-with-his-cell-phone-picture-id472057493?s=612x612"}} style={styles.logo} />
      </View>
    </View>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
},
  logo: {
    height: 200,
    width: 350,
  },
  titleBlank: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    color: '#fff'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,    
  },
  input1: {
    fontSize: 22,
    borderWidth: 1,
    borderColor: '#000',
    textcolor: '#808080',
    textAlign: 'center',
    marginBottom: 10,
    marginRight: 5,
    marginLeft: 5,
    paddingLeft:10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  instructions: {
    color: '#000',
    fontSize: 24,
    marginHorizontal: 15,
    marginBottom: 10,
    paddingTop: 25,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: "#f98b88",
    padding: 20,
    borderRadius: 0,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: "bold",
    color: '#000',
  }, 
});