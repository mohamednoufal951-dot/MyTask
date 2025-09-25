import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Switch, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@react-native-vector-icons/ionicons"; // ✅ corrected import
import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";

const AuthScreen = () => {
  const navigation = useNavigation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [location, setLocation] = useState(null); // ✅ new state for location

  const fetchLocation = async (lat, lon) => {
    try {
      const apiKey = "03b2251cf0d74e75bb66c12087d75ccd"; // replace with your Geoapify API key
      const url = `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.features && data.features.length > 0) {
        return data.features[0].properties; // contains city, country, etc.
      }
      return null;
    } catch (error) {
      console.error("Error fetching location:", error);
      return null;
    }
  };

  useEffect(() => {
    // fetch once on mount
    fetchLocation(10.7838746, 78.6879327).then((loc) => {
      console.log("Fetched location:", loc);
      setLocation(loc); // ✅ save in state
    });

    GoogleSignin.configure({
      webClientId:
        "604002977242-n0i65j6786t3e7lfmpacq05kg6bbkagl.apps.googleusercontent.com",
      offlineAccess: true,
    });
  }, []);

  const signIn = async () => {
    try {
      const userInfo = await GoogleSignin.signIn();
      Alert.alert("User Info", JSON.stringify(userInfo, null, 2));
      console.log("User Info:", userInfo);

      navigation.navigate("Home", { user: userInfo.user });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log("User cancelled the login flow");
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log("Sign in in progress");
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log("Play services not available");
      } else {
        console.error("Some other error:", error);
      }
    }
  };

  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      console.log("User signed out");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const bgColor = isDarkMode ? "#222" : "#eef";
  const textColor = isDarkMode ? "#fff" : "#333";
  const subTextColor = isDarkMode ? "#aaa" : "#555";

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      {/* Dark Mode Switch */}

     
      <View style={styles.switchContainer}>
        
        <Switch
          value={isDarkMode}
          onValueChange={setIsDarkMode}
          trackColor={{ false: "#ccc", true: "#5A38A5" }}
          thumbColor={isDarkMode ? "#fff" : "#f4f3f4"}
          style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],marginBottom:5 }}
        />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
       <Ionicons name="location" size={18} style={styles.price} />
         <Text style={{ color: textColor }}> {location?.state || ''}</Text>
         </View>
      </View>
 
      <Ionicons
        name="location"
        size={100}
        color={isDarkMode ? "#fff" : "#5A38A5"}
      />
      <Text style={[styles.Heading, { color: textColor }]}>Travel Journal</Text>
      <Text style={[styles.SubHeading, { color: subTextColor }]}>
        Capture Your Adventures, Anywhere
      </Text>

      {/* Go Home */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "green" }]}
          onPress={() => navigation.navigate("Home", { location: location })}
        >
          <Text style={styles.buttonText}>Go to Home Screen</Text>
        </TouchableOpacity>
      </View>

      {/* Google Sign In Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#DB4437" }]}
          onPress={signIn}
        >
          <Text style={styles.buttonText}>Sign in with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 20 },
  switchContainer: { flexDirection: "column", position: "absolute", top: 50, right: 20, alignItems: "center" },
  Heading: { fontSize: 28, fontWeight: "bold", marginTop: 20 },
  SubHeading: { fontSize: 16, marginTop: 10, textAlign: "center" },
  buttonContainer: { flexDirection: "row", marginTop: 20 },
  button: { paddingVertical: 12, paddingHorizontal: 25, borderRadius: 8, marginHorizontal: 10, alignItems: "center" },
  buttonText: { fontSize: 16, fontWeight: "bold", color: "#fff" },
});

export default AuthScreen;
