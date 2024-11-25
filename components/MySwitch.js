import React, { useState } from 'react';
import { View, Switch, StyleSheet, Text } from 'react-native';

const MySwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {isEnabled ? 'Switch is ON' : 'Switch is OFF'}
      </Text>
      <Switch
        trackColor={{ false: '#ff4c4c', true: '#4caf50' }} 
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'} 
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
    fontWeight: 'bold',
  },
});

export default MySwitch;