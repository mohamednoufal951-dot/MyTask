import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import Ionicons from "@react-native-vector-icons/ionicons";
import { useNavigation, useRoute } from "@react-navigation/native";
import Tags from "./Tags";

const SingleProperty = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { item } = route.params;

  const date=item.Date;


  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={{ uri: item.image }}
        style={styles.imageBackground}
      >
        {/* Top Buttons */}
        <View style={styles.topButtons}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>

          <View style={styles.rightIcons}>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => console.log("Share pressed")}
            >
              <Ionicons name="share-social-outline" size={24} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => console.log("More pressed")}
            >
              <Ionicons name="ellipsis-vertical" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Title */}
        <View style={{ padding: 10, position: "absolute", bottom: 38 }}>
          <Text style={{ fontSize: 30, color: "#fff" }}>{item.title}</Text>
        </View>

        {/* Location & Date Overlay */}
        <View style={styles.overlayContainer}>
          <View style={styles.overlayItem}>
            <Ionicons name="location" size={18} color="#fff" />
            <Text style={styles.overlayText}>{item.location}</Text>
          </View>

          <View style={styles.overlayItem}>
            <Ionicons name="calendar" size={18} color="#fff" />
            <Text style={styles.overlayText}>
              {new Date(date).toLocaleDateString()}
            </Text>
          </View>
        </View>
      </ImageBackground>

      {/* Content Section */}
      <View style={{ padding: 16 }}>
        <Text style={{ marginTop: 8, color: "#555", fontSize: 18 }}>
          {item.description || "No description available"}
        </Text>
      </View>

      {/* Tags */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 16 }}>
        <Tags tags={item.tags} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    width: "100%",
    height: 250,
    justifyContent: "space-between",
  },
  topButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    marginTop: 20,
  },
  rightIcons: {
    flexDirection: "row",
    gap: 12,
  },
  iconButton: {
    padding: 6,
    backgroundColor: "rgba(0,0,0,0.4)",
    borderRadius: 20,
    marginLeft: 8,
  },
  overlayContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  overlayItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  overlayText: {
    color: "#fff",
    marginLeft: 6,
    fontSize: 14,
  },
});

export default SingleProperty;
