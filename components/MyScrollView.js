import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

const MyScrollView = ({
  children,
  horizontal = false,
  showsVerticalScrollIndicator = true,
  showsHorizontalScrollIndicator = true,
  onRefresh,
  refreshing = false,
  style,
  contentContainerStyle,
  ...props
}) => {
  return (
    <ScrollView
      horizontal={horizontal}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
      onRefresh={onRefresh}
      refreshing={refreshing}
      contentContainerStyle={[styles.scrollViewContent, contentContainerStyle]}
      style={[styles.scrollView, style]}
      {...props}
    >
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    padding: 16,
  },
});

export default MyScrollView;