import React from 'react';
import { Text, StyleSheet } from 'react-native';

const MyText = () => {
  return (
    <Text style={styles.baseText}>
      I am bold
      <Text style={styles.innerText}> and blue</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontWeight: 'bold',
    fontFamily: 'Arial', 
  },
  innerText: {
    color: 'blue', 
  },
});

export default MyText;