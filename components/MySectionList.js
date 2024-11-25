import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
} from 'react-native';

const DATA = [
  {
    title: 'Country',
    data: [
      { name: 'Philippines', color: '#999999' },
      { name: 'USA', color: '#99ff99' },
      { name: 'Mexico', color: '#9999ff' },
    ],
  },
  {
    title: 'Climate',
    data: [
      { name: 'Tropical', color: '#999999' },
      { name: 'Desert', color: '#ff9999' },
      { name: 'Temperate', color: '#99ccff' },
    ],
  },
];

const MySectionList = () => (
  <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item.name ? item.name : index.toString()}
      renderItem={({ item }) => (
        <View style={[styles.item, { backgroundColor: item.color || '#fff' }]}>
          <Text style={styles.title}>{item.name || item}</Text>
        </View>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
    backgroundColor: '#ffffff',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#f8f9fa',
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    color: '#333',
  },
  title: {
    fontSize: 24,
    color: '#333',
  },
});

export default MySectionList;