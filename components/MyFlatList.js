import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const MyFlatList = () => {
  const data = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      style={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    width: '100%', 
    paddingHorizontal: 10, 
    backgroundColor: '#f9f9f9', 
  },
  item: {
    paddingVertical: 18, 
    paddingHorizontal: 16, 
    borderRadius: 12, 
    backgroundColor: '#fff', 
    marginBottom: 12, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4, 
  },
  title: {
    fontSize: 18, 
    fontWeight: '600', 
    color: '#333', 
  },
});

export default MyFlatList;
