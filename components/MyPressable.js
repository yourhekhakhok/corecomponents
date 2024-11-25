import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity, Animated } from 'react-native';

const MyPressable = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [scaleValue] = useState(new Animated.Value(1)); 

 
  const animateButton = () => {
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 0.9,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start(() => setModalVisible(true));
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableOpacity style={styles.modalOverlay} onPress={() => setModalVisible(false)}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello Justine!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>How are you?</Text>
              </Pressable>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>

      <Animated.View style={[styles.animatedButton, { transform: [{ scale: scaleValue }] }]}>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={animateButton}
        >
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF', 
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 30,
  },
  buttonClose: {
    backgroundColor: '#2196F3', 
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 30,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  animatedButton: {
    transform: [{ scale: 1 }],
  },
});

export default MyPressable;