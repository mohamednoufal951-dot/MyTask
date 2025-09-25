// Wishlist.js
import { View, Text, Button, FlatList,StyleSheet } from "react-native";
import React from "react";
import { useWishlistStore } from '../State/wishlistStore';
import CustomCard from "../components/CustomCard";

const Wishlists = () => {
  const { wishlist, removeFromWishlist } = useWishlistStore();
  console.log(wishlist);

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.heading}>Wishlist</Text>
      <FlatList
      data={wishlist}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <CustomCard item={item} routeName="SingleProperty"/>}
      contentContainerStyle={{ padding: 18 }}
    />
    </View>
  );
};

const styles = StyleSheet.create({

  heading:{
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical:10
  }
});

export default Wishlists;
