import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useAsyncStorage = (key, defaultValue) => {
  const [storedValue, setStoredValue] = useState(defaultValue);

  useEffect(() => {
    const loadStoredValue = async () => {
      try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
          setStoredValue(JSON.parse(value));
        }
      } catch (error) {
        console.error("Failed to load data from AsyncStorage", error);
      }
    };

    loadStoredValue();
  }, [key]);

  const setValue = async (value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      setStoredValue(value);
    } catch (error) {
      console.error("Failed to save data to AsyncStorage", error);
    }
  };

  return [storedValue, setValue];
};
