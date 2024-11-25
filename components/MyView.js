import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyView = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.greenBox]} />
      <View style={[styles.box, styles.yellowBox]} />
      <Text style={styles.text}>Hello Cy Kirsten!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
  },
  box: {
    borderRadius: 10,
  },
  greenBox: {
    backgroundColor: 'green',
    flex: 0.3,
    height: '100%',
    marginRight: 10,
  },
  yellowBox: {
    backgroundColor: 'yellow',
    flex: 0.3,
    height: '100%',
    marginRight: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
  },
});

export default MyView;