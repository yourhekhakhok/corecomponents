import React, { useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const MyTouchableHighlight = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(count + 1);

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={onPress} underlayColor="#DDDDDD">
        <View style={styles.button}>
          <Text style={styles.buttonText}>Touch Here</Text>
        </View>
      </TouchableHighlight>
      <View style={styles.countContainer}>
        <Text style={styles.countText}>{count || null}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#F5F5F5', 
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#ff3333', 
    borderRadius: 25, 
    paddingVertical: 15,
    paddingHorizontal: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#000000', 
    fontSize: 16,
    fontWeight: 'bold',
  },
  countContainer: {
    alignItems: 'center',
    padding: 20,
  },
  countText: {
    fontSize: 24,
    color: '#FF00FF', 
    fontWeight: 'bold',
  },
});

export default MyTouchableHighlight;