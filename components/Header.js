import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { theme } from '../colors';

const Header = ({ working, setWorking }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => setWorking(true)}>
        <Text style={{...styles.btnText, color: working ? "white" : theme.grey }}>Work</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setWorking(false)}>
        <Text style={{...styles.btnText, color: !working ? "white" : theme.grey }}>Play</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 100,
  },
  btnText: {
    fontSize: 38,
    fontWeight: "600",
    color: "white",
  },
});

export default Header;
