import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const MyTouchableOpacity = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text style={styles.countText}>Count: {count}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.7}>
        <Text style={styles.buttonText}>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#F5F5F5', // Light background for contrast
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#6200EE', // Purple button background
    borderRadius: 25, // Rounded corners
    paddingVertical: 15,
    paddingHorizontal: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Elevation for Android
  },
  buttonText: {
    color: '#FFFFFF', // White text color
    fontSize: 16,
    fontWeight: 'bold',
  },
  countContainer: {
    alignItems: 'center',
    padding: 20,
  },
  countText: {
    fontSize: 24,
    color: '#333', // Dark color for contrast
    fontWeight: 'bold',
  },
});

export default MyTouchableOpacity;