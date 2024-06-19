import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { theme } from '../colors';

const ToDoItem = ({ toDo, onToggleDone, onEdit, onDelete, navigation }) => {
  return (
    <View style={styles.toDo}>
      <TouchableOpacity style={styles.checkBox} onPress={onToggleDone}>
        {toDo.isDone
          ? (<Fontisto name="checkbox-active" size={18} color={theme.grey} />)
          : (<Fontisto name="checkbox-passive" size={18} color={theme.grey} />)
        }
      </TouchableOpacity>
      <Text style={{
        ...styles.toDoText,
        color: toDo.isDone ? theme.grey : "white",
        textDecorationLine: toDo.isDone ? "line-through" : "none"
        }}
        onPress={() => navigation.navigate('ToDoDetailScreen', { toDo })}
      >
        {toDo.text}
      </Text>
      <TouchableOpacity style={styles.editBtn} onPress={onEdit}>
        <FontAwesome6 name="edit" size={18} color={theme.grey} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.removeBtn} onPress={onDelete}>
        <Fontisto name="trash" size={18} color={theme.grey} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  toDo: {
    flex: 0,
    backgroundColor: theme.toDoBg,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
    flexDirection: "row",
  },
  checkBox: {
    flex: 0.15,
  },
  toDoText: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
  },
  editBtn: {
    flex: 0.15,
  },
  removeBtn: {
    flex: 0.15,
  },
});

export default ToDoItem;
