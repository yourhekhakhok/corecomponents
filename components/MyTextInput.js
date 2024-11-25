import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, View, Text } from 'react-native';

const MyTextInput = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>Input Text:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Enter some text"
      />
      <Text style={styles.label}>Input Number:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Enter a number"
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa', 
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333', 
  },
  input: {
    height: 50,
    width: '100%',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#007BFF', 
    borderRadius: 10, 
    paddingHorizontal: 10,
    backgroundColor: '#ffffff', 
    shadowColor: '#000', 
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, 
  },
});

export default MyTextInput;