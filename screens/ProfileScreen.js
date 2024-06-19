import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../colors';

const ProfileScreen = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Hello, World!!
        This is Profile page.
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

export default ProfileScreen;
