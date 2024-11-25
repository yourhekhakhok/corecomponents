import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

const MyActivityIndicator = ({ size, color, label }) => (
  <View style={styles.indicatorWrapper}>
    <ActivityIndicator size={size} color={color} />
    <Text style={styles.label}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  indicatorWrapper: {
    flexDirection: 'row', 
    alignItems: 'center',  
    justifyContent: 'center', 
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
    margin: 10, 
  label: {
    marginLeft: 15, 
    fontSize: 16, 
    fontWeight: '600', 
    color: '#555', 
  },
});

export default MyActivityIndicator;
