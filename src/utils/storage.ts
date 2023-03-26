import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveItem = async (key: string, value: string) => {
  if (!key) {
    return;
  }
  try {
    return await AsyncStorage.setItem(`@findWeather:${key}`, value);
  } catch (err) {}
};

export const getItem = async (key: string) => {
  if (!key) {
    return;
  }
  try {
    return await AsyncStorage.getItem(`@findWeather:${key}`);
  } catch (err) {}
};
