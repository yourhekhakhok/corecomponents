import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Light background for contrast
    padding: 20,
  },
  image: {
    width: 200, // Set the width of the image
    height: 200, // Set the height of the image
    borderRadius: 10, // Slightly rounded corners
    borderWidth: 2,
    borderColor: '#3498db', // Border color
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 20, // Space below the image
  },
  headerText: {
    fontSize: 24, // Larger header text
    fontWeight: 'bold',
    color: '#333', // Darker text color
    marginBottom: 20, // Space below the header text
  },
});

const MyImage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>My Image Output: </Text>
      <Image
        style={styles.image}
        source={require("C:\Users\JM\OneDrive\Documents\MyMobile(Evangelista)\my-app\assets\adaptive-icon.png")} // Path to your local image
      />
    </View>
  );
};

export default MyImage;