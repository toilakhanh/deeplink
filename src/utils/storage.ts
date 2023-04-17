import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN = 'TOKEN';

export const saveUserToken = (token: string) => {
  AsyncStorage.setItem(TOKEN, token);
};

export const getUserToken = () => {
  return AsyncStorage.getItem(TOKEN);
};

export const clearUserToken = () => {
  return AsyncStorage.removeItem(TOKEN);
};

export const clearStorage = () => {
  return AsyncStorage.clear();
};
