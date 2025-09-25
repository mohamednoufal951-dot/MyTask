import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Fetch_Location } from "./Fetch_location";

const LocationHandler=()=>{
  // const { location, loading, error } = Fetch_Location(10.7838746, 78.6879327);

  return (
    <View style={{ padding: 20 }}>
      {loading && <ActivityIndicator size="large" color="blue" />}
      {error && <Text style={{ color: "red" }}>❌ {error}</Text>}
      {location && (
        <>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Location:</Text>
          <Text>Country: {location.country}</Text>
          <Text>State: {location.state}</Text>
          <Text>City: {location.city}</Text>
          <Text>Formatted: {location.formatted}</Text>
        </>
      )}
    </View>
  );
}
export default LocationHandler