import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  TouchableOpacity,
} from 'react-native';

const MyKeyboardAvoidingView = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.header}>Welcome Back!</Text>
          <TextInput 
            placeholder="Enter your Username" 
            style={styles.textInput} 
            placeholderTextColor="#aaa"
          />
          <TextInput 
            placeholder="Enter your Password" 
            style={styles.textInput} 
            placeholderTextColor="#aaa" 
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.button} onPress={() => null}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Light gray background
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333', // Darker text color for contrast
  },
  textInput: {
    height: 50,
    width: '100%',
    borderColor: '#ccc', // Lighter border
    borderWidth: 1,
    borderRadius: 8, // Rounded corners
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff', // White input fields
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#6200ee', // Purple button
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25, // Rounded button
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff', // White text
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MyKeyboardAvoidingView;