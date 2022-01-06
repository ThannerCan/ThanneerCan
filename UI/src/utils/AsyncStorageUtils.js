import AsyncStorage from '@react-native-async-storage/async-storage';

export const getDataFromAsyncStorage = async key => {
  let data = null;
  data = await AsyncStorage.getItem(key).catch(e => console.error(e));
  return data;
};

export const storeDataToAsyncStorage = async (key, value) => {
  await AsyncStorage.setItem(key, value).catch(e => console.error(e));
};

export const deleteDataFromAsyncStorage = async key => {
    await AsyncStorage.removeItem(key).catch(e => console.error(e));
}