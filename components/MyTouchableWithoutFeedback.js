import React, { useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback, Text, View } from 'react-native';

const MyTouchableWithoutFeedback = () => {
  const [count, setCount] = useState(0);

  const onPress = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text style={styles.countText}>Count: {count}</Text>
      </View>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Touch Here</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // Center align all items
    backgroundColor: '#ECF0F1', // Light gray background for contrast
    padding: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#4CAF50', // Green background color for the button
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30, // Rounded corners
    elevation: 5, // Elevation for Android shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#FFFFFF', // White text color
    fontSize: 18,
    fontWeight: 'bold',
  },
  countContainer: {
    marginBottom: 20, // Space between count text and button
  },
  countText: {
    fontSize: 24,
    color: '#333', // Dark text color for contrast
    fontWeight: 'bold',
  },
});

export default MyTouchableWithoutFeedback;