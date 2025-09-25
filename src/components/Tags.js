import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Ionicons from "@react-native-vector-icons/ionicons";

const Tags = ({ tags }) => {
  if (!tags || tags.length === 0) return null;

  return (
    <View style={styles.container}>
      {tags.map((tag, index) => (
        <View key={index} style={styles.tag}>
           <Ionicons name="pricetag" size={16} color="#333" />
          <Text style={styles.tagText}>{tag}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 8,
  },
  tag: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
    marginRight: 6,
    marginBottom: 6,
  },
  tagText: {
    fontSize: 14,
    color: "#333",
    marginLeft: 4,
  },
});

export default Tags;
