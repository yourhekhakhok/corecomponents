import React from 'react';
import { ImageBackground, StyleSheet, Text, View, ActivityIndicator } from 'react-native';

const MyImageBackground = () => {
  const image = { uri: 'https://legacy.reactjs.org/logo-og.png' }; // Image URI
  
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.image}
        onError={() => alert('Image failed to load. Please check the URL.')}
        defaultSource={require('./assets/fallback-image.png')} // Local fallback image
      >
        <Text style={styles.text}>Inside</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0', // Semi-transparent black background
  },
});

export default MyImageBackground;