import React, { useState } from 'react';
import { View, TextInput, ScrollView, StyleSheet, Button, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useAsyncStorage } from '../hooks/useAsyncStorage';
import { theme } from '../colors';
import Header from '../components/Header';
import ToDoItem from '../components/ToDoItem';

const STORAGE_TOGGLE_STATUS_KEY = "@meta";
const STORAGE_KEY = "@toDos";

const ToDoListScreen = ({ navigation }) => {
  const [working, setWorking] = useAsyncStorage(STORAGE_TOGGLE_STATUS_KEY, true);
  const [text, setText] = useState("");
  const [toDos, setToDos] = useAsyncStorage(STORAGE_KEY, {});

  const addToDo = () => {
    if (text === "") return;
    const newToDos = { ...toDos, [Date.now()]: { text, working, isDone: false } };
    setToDos(newToDos);
    setText("");
  };

  const setDone = (key) => {
    const newToDos = { ...toDos };
    newToDos[key].isDone = !newToDos[key].isDone;
    setToDos(newToDos);
  };

  const editToDo = (key) => {
    Alert.prompt(
      "Edit",
      "",
      async (value) => {
        const newToDos = { ...toDos };
        newToDos[key].text = value;
        setToDos(newToDos);
      },
      'plain-text',
      toDos[key].text,
    );
  };

  const deleteToDo = (key) => {
    Alert.alert("Delete To Do", "Are you sure?", [
      { text: "Cancel", style: "cancel" },
      { text: "I'm Sure", style: "destructive", onPress: () => {
        const newToDos = { ...toDos };
        delete newToDos[key];
        setToDos(newToDos);
      } },
    ]);
  };

  return (
    <View style={styles.container}>
      <Button
        title='Go to Profile'
        onPress={() => navigation.navigate('ProfileScreen')}
      />
      <StatusBar style="auto" />
      <Header working={working} setWorking={setWorking} />
      <TextInput
        onSubmitEditing={addToDo}
        onChangeText={setText}
        returnKeyType="done"
        value={text}
        placeholder={working ? "Add a To Do" : "Where do you want to go?"}
        style={styles.input}
      />
      <ScrollView>
        {Object.keys(toDos).map((key) =>
          toDos[key].working === working ? (
            <ToDoItem
              key={key}
              toDo={toDos[key]}
              onToggleDone={() => setDone(key)}
              onEdit={() => editToDo(key)}
              onDelete={() => deleteToDo(key)}
              navigation={navigation}
            />
          ) : null
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginVertical: 20,
    fontSize: 18
  },
});

export default ToDoListScreen;
