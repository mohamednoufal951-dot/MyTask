import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList } from "react-native";
import { addToArray, getArray, updateArrayItem, deleteArrayItem } from "./storageService";

const  CrudUtils=()=> {
  const [data, setData] = useState([]);

  // Load data on mount
  useEffect(() => {
    const loadData = async () => {
      const storedData = await getArray();
      setData(storedData);
    };
    loadData();
  }, []);

  // Add new item
  const handleAdd = async () => {
    const newItem = { id: Date.now(), name: "Item " + (data.length + 1) };
    await addToArray(newItem);
    setData(await getArray());
  };

  // Update first item
  const handleUpdate = async () => {
    if (data.length === 0) return;
    await updateArrayItem(data[0].id, { name: "Updated Item" });
    setData(await getArray());
  };

  // Delete first item
  const handleDelete = async () => {
    if (data.length === 0) return;
    await deleteArrayItem(data[0].id);
    setData(await getArray());
  };

  return (
    <View style={{ padding: 20 }}>
      <Button title="➕ Add Item" onPress={handleAdd} />
      <Button title="✏️ Update First Item" onPress={handleUpdate} />
      <Button title="🗑 Delete First Item" onPress={handleDelete} />

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
}
export default CrudUtils;