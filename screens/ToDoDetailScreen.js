import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useAsyncStorage } from '../hooks/useAsyncStorage';
import { theme } from '../colors';
import Header from '../components/Header';
import ToDoItem from '../components/ToDoItem';

const ToDoDetailScreen = ({ route, navigation }) => {
  const { toDo } = route.params;
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.text}>
        { toDo.text }
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
  text: {
    flex: 10,
    fontSize: 100,
    color: 'white',
    fontWeight: "500",
  },
});

export default ToDoDetailScreen;
