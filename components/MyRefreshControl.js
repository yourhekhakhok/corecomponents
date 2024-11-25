import React from 'react';
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const MyRefreshControl = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="#fff" // Spinner color for iOS
            colors={['#ff0000', '#00ff00', '#0000ff']} // Spinner colors for Android
          />
        }>
        <View style={styles.content}>
          <Text style={styles.text}>
            Pull down to see the RefreshControl indicator
          </Text>
          {refreshing && (
            <Text style={styles.refreshingText}>Refreshing data...</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34', // Dark background for better contrast
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  content: {
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#fff', // White text for contrast on dark background
    marginBottom: 20,
    textAlign: 'center',
  },
  refreshingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#00ff00', // Green text when refreshing
  },
});

export default MyRefreshControl;