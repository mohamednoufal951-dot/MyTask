import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import Ionicons from '@react-native-vector-icons/ionicons';
import { useNavigation } from '@react-navigation/native';
import { useWishlistStore } from '../State/wishlistStore';

const CustomCard = ({ item, routeName }) => {
  const navigation = useNavigation();
  const { addToWishlist,wishlist, removeFromWishlist } = useWishlistStore();

    const isInWishlist = wishlist.some((w) => w.id === item.id);

     const handlePress = () => {
    if (isInWishlist) {
      removeFromWishlist(item.id);
    } else {
      addToWishlist(item);
      navigation.navigate("WishList"); // 👈 navigate after adding
    }
  };


  return (
    <View style={styles.card}>
      <TouchableOpacity
        style={{ flexDirection: 'row', flex: 1 }}
        onPress={() => navigation.navigate(routeName, { item })}
      >
        <Image
          source={{ uri: item.image }}
          style={styles.cardImage}
          resizeMode="cover"
        />
        <View style={styles.cardContent}>
          <View style={styles.titleContainers}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.statusContainer}>
              <View style={styles.statusDot} />
              <Text style={styles.statusText}>Active</Text>
            </View>
          </View>
          <Text style={styles.description}>{item.description}</Text>
          <View style={styles.priceContainer}>
                 <View style={styles.locationContainer}>
                      <Ionicons name="location" size={18} style={styles.price}/>
                     <Text style={styles.price}>{item.location}</Text>
                 </View>
                 <View style={styles.dateContainer}>
                        <Ionicons name="calendar" size={18} style={styles.price}/>
                   <Text style={styles.price}>
  {new Date(item.Date).toLocaleDateString()}
</Text>
                 </View>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.icon} onPress={handlePress}>
        <Ionicons
        name={isInWishlist ? "heart" : "heart-outline"}
        size={22}
        color={isInWishlist ? "red" : "black"}
      />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    overflow: 'hidden',
    height: 130,
    alignItems: 'center',
  },
  cardImage: {
    width: Dimensions.get('window').width * 0.3,
    height: 130,
  },
  cardContent: {
    flex: 1,
    padding: 10,
    alignItems: 'flex-start',

  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginRight: 10,
  },
    titleContainers: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'flex-start',
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 5,
    backgroundColor: '#4CAF50',
  },
  statusText: {
    fontSize: 14,
    color: '#4CAF50',
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
  status: {
    fontSize: 14,
    color: '#555',
    marginLeft: 5,
  },
  icon: {
    position: 'absolute',
    right: 8,
    top: 6,
  },
  priceContainer:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    marginTop:10
  },
  locationContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:10,
    marginRight:12
  },
  dateContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:10
  },
  price:{
    marginRight:3
  }
});

export default CustomCard;
