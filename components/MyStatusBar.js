import React, { useState } from 'react';
import {
  Button,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];

const MyStatusBar = () => {
  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
  const [statusBarTransition, setStatusBarTransition] = useState(TRANSITIONS[0]);

  const changeStatusBarVisibility = () => setHidden(!hidden);

  const changeStatusBarStyle = () => {
    const styleId = STYLES.indexOf(statusBarStyle) + 1;
    setStatusBarStyle(styleId === STYLES.length ? STYLES[0] : STYLES[styleId]);
  };

  const changeStatusBarTransition = () => {
    const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
    setStatusBarTransition(transition === TRANSITIONS.length ? TRANSITIONS[0] : TRANSITIONS[transition]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={hidden}
      />
      <View style={styles.statusInfo}>
        <Text style={styles.textStyle}>
          StatusBar Visibility: {hidden ? 'Hidden' : 'Visible'}
        </Text>
        <Text style={styles.textStyle}>
          StatusBar Style: {statusBarStyle}
        </Text>
        {Platform.OS === 'ios' && (
          <Text style={styles.textStyle}>
            StatusBar Transition: {statusBarTransition}
          </Text>
        )}
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Toggle StatusBar" onPress={changeStatusBarVisibility} />
        <Button title="Change StatusBar Style" onPress={changeStatusBarStyle} />
        {Platform.OS === 'ios' && (
          <Button
            title="Change StatusBar Transition"
            onPress={changeStatusBarTransition}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECF0F1',
    padding: 20,
  },
  statusInfo: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  buttonsContainer: {
    width: '100%',
    padding: 10,
  },
  textStyle: {
    textAlign: 'center',
    marginBottom: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default MyStatusBar;