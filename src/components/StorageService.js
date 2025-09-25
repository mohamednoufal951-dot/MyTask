import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@my_array_data";

// ✅ Read array (initialize with default empty array if not found)
export const getArray = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error("Error reading array:", e);
    return [];
  }
};

// ✅ Save (overwrite)
export const saveArray = async (arrayData) => {
  try {
    const jsonValue = JSON.stringify(arrayData);
    await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
    console.log("Array saved successfully!");
  } catch (e) {
    console.error("Error saving array:", e);
  }
};

// ✅ Add single object to array
export const addToArray = async (newItem) => {
  try {
    const existingArray = await getArray();
    const updatedArray = [...existingArray, newItem];
    await saveArray(updatedArray);
  } catch (e) {
    console.error("Error adding to array:", e);
  }
};

// ✅ Update object by id
export const updateArrayItem = async (id, updatedItem) => {
  try {
    const array = await getArray();
    const newArray = array.map((item) =>
      item.id === id ? { ...item, ...updatedItem } : item
    );
    await saveArray(newArray);
  } catch (e) {
    console.error("Error updating item:", e);
  }
};

// ✅ Delete object by id
export const deleteArrayItem = async (id) => {
  try {
    const array = await getArray();
    const newArray = array.filter((item) => item.id !== id);
    await saveArray(newArray);
  } catch (e) {
    console.error("Error deleting item:", e);
  }
};
