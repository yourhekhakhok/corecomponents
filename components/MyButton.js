import React from 'react';
import { StyleSheet, Button, View, Alert, Text } from 'react-native';

const MyButton = () => (
  <>
    <Text style={styles.heading}>Choose a Button</Text>

    <View style={styles.buttonContainer}>
      {/* Container for Button 1 */}
      <View style={styles.buttonWrapper}>
        <Button
          title="Press Button 1"
          onPress={() => Alert.alert('Button 1 pressed')}
        />
      </View>

      {/* Container for Button 2 */}
      <View style={styles.buttonWrapper}>
        <Button
          title="Press Button 2"
          color="#ff4081" 
          onPress={() => Alert.alert('Button 2 pressed')}
        />
      </View>
    </View>
  </>
);

const styles = StyleSheet.create({
  heading: {
    fontSize: 22, 
    fontWeight: '700', 
    color: '#333', 
    textAlign: 'center', 
    marginBottom: 20, 
  },
  buttonContainer: {
    paddingHorizontal: 20, 
    paddingVertical: 15, 
    borderRadius: 12, 
    backgroundColor: '#fafafa', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    margin: 10, 
  },
  buttonWrapper: {
    marginBottom: 15, 
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10, 
    overflow: 'hidden', 
});

export default MyButton;
