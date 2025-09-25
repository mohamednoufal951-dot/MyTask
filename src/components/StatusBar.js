import React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import { useRoute } from '@react-navigation/native';
import { modelStore } from '../State/modelStore';

const StatusBar = () => {
  const route = useRoute();
 const {model,location}=route.params||{};
  const { openModel, closeModel } = modelStore();

  return (
    <View style={styles.container}>
   
      <Text style={styles.title}>My Journal</Text>

  
      <View style={styles.iconContainer}>
    
        <TouchableOpacity onPress={() => openModel()}>
                  <Ionicons name="search" size={26} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
                  <FontAwesome6 name="user" size={26} style={styles.icon} />
        </TouchableOpacity>
      </View>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    justifyContent: 'space-between', // title on left, icons on right
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 25,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee', // subtle bottom border
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 26,
    color: '#333',
  },
});

export default StatusBar;
