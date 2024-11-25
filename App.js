import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyScrollView from './components/MyScrollView'; 
import MyActivityIndicator from './components/MyActivityIndicator';
import MyButton from './components/MyButton';
import MyFlatList from './components/MyFlatList';
import MyImage from './components/MyImage';
import MyImageBackground from './components/MyImageBackground'; 
import MyKeyboardAvoidingView from './components/MyKeyboardAvoidingView'; 
import MyModal from './components/MyModal'; 
import MyPressable from './components/MyPressable'; 
import MyRefreshControl from './components/MyRefreshControl';
import MySectionList from './components/MySectionList';
import MyStatusBar from './components/MyStatusBar';
import MySwitch from './components/MySwitch';
import MyText from './components/MyText';
import MyTextInput from './components/MyTextInput';
import MyTouchableHighlight from './components/MyTouchableHighlight';
import MyTouchableOpacity from './components/MyTouchableOpacity';
import MyView from './components/MyView';
import MyVirtualizedList from './components/MyVirtualizedList';

export default function App() {
  return (
    <View style={styles.container}>
      <MyScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.text}>My Activity Indicator Output: </Text>
        
        <MyActivityIndicator size="small" color="#0000ff" />
        <MyActivityIndicator size="large" color="#00ff00" />
        <MyActivityIndicator size="small" color="#ff0000" />
        <MyActivityIndicator size="large" color="#ff00ff" />

        <Text style={styles.text}>My Image Output: </Text>
        <MyImage />  

        <Text style={styles.text}>My Button Output: </Text>
        <MyButton />
        
        <Text style={styles.text}>My Flat List Output: </Text>
        <MyFlatList />  

        <Text style={styles.text}>My Image Background Output: </Text>
        <MyImageBackground />

        <Text style={styles.text}>My Keyboard Avoiding View Output: </Text>
        <MyKeyboardAvoidingView /> 

        <Text style={styles.text}>My Modal Output: </Text>
        <MyModal />  

        <Text style={styles.text}>My Pressable Output: </Text>
        <MyPressable /> 

        <Text style={styles.text}>My RefreshControl Output: </Text>
        <MyRefreshControl /> 

        <Text style={styles.text}>My SectionList Output: </Text>
        <MySectionList /> 

        <Text style={styles.text}>My StatusBar Output: </Text>
        <MyStatusBar /> 

        <Text style={styles.text}>My Switch Output: </Text>
        <MySwitch /> 

        <Text style={styles.text}>My Text Output: </Text>
        <MyText/> 

        <Text style={styles.text}>My Text Input Output: </Text>
        <MyTextInput /> 

        <Text style={styles.text}>My Touchable Highlight Output: </Text>
        <MyTouchableHighlight /> 

        <Text style={styles.text}>My TouchableOpacity Output: </Text>
        <MyTouchableOpacity /> 

        <Text style={styles.text}>My View Output: </Text>
        <MyView /> 
 
        <Text style={styles.text}>My VirtualizedList Output: </Text>
        <MyVirtualizedList /> 
      </MyScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});