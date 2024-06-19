import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ToDoListScreen from './screens/ToDoListScreen';
import ProfileScreen from './screens/ProfileScreen';
import ToDoDetailScreen from './screens/ToDoDetailScreen';
import { theme } from './colors';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='ToDoListScreen'
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: theme.bg},
        }}
      >
        <Stack.Screen 
          name='ToDoListScreen' 
          component={ToDoListScreen} 
          options={{
            title: '',
          }}
          />
        <Stack.Screen 
          name='ProfileScreen' 
          component={ProfileScreen} 
          options={{
            headerTintColor: theme.grey,
            title: '',
          }}  
        />
        <Stack.Screen 
          name='ToDoDetailScreen' 
          component={ToDoDetailScreen} 
          options={{
            headerTintColor: theme.grey,
            title: '',
          }}  
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}