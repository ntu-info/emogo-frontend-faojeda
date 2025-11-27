// storage wrapper: tries AsyncStorage, falls back to in-memory store when native module isn't available
let AsyncStorage;
try {
  // require so bundlers can still include the module when available
  // eslint-disable-next-line import/no-extraneous-dependencies
  AsyncStorage = require("@react-native-async-storage/async-storage").default;
} catch (e) {
  AsyncStorage = null;
}

const inMemoryStore = {};

const storage = {
  async getItem(key) {
    if (AsyncStorage && AsyncStorage.getItem) {
      try {
        return await AsyncStorage.getItem(key);
      } catch (e) {
        // fall back
      }
    }
    return inMemoryStore[key] ?? null;
  },
  async setItem(key, value) {
    if (AsyncStorage && AsyncStorage.setItem) {
      try {
        return await AsyncStorage.setItem(key, value);
      } catch (e) {
        // fall back to memory
      }
    }
    inMemoryStore[key] = value;
    return null;
  },
  async removeItem(key) {
    if (AsyncStorage && AsyncStorage.removeItem) {
      try {
        return await AsyncStorage.removeItem(key);
      } catch (e) {
        // fall back
      }
    }
    delete inMemoryStore[key];
    return null;
  },
};

export default storage;
