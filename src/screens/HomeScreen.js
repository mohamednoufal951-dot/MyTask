import React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity,FlatList, Modal, TextInput } from 'react-native';
import StatusBar from '../components/StatusBar';
import CustomCard from '../components/CustomCard';

import { modelStore } from '../State/modelStore';
import InputField from '../components/InputField';
import { FilterStore } from '../State/FilterStore';


const data = [
  {
    id: '1',
    title: 'Mountain View',
    description: 'A beautiful mountain view during sunrise.',
    image: 'https://picsum.photos/200/300?random=1',
    location: 'California', 
    tags: ['mountains', 'nature', 'sunrise'],
    Date: '2025-09-10T19:30:00Z',
  
  },
  {
    id: '2',
    title: 'City Life',
    description: 'The hustle and bustle of the city streets.',
    image: 'https://picsum.photos/200/300?random=10',
     location: 'California',
     tags: ['mountains', 'nature', 'sunrise', 'city', 'street'], 
    Date: '2025-09-10T19:30:00Z',
  },
  {
    id: '3',
    title: 'Beach Vibes',
    description: 'Relaxing at the sunny beach with waves.',
    image: 'https://picsum.photos/200/300?random=3',
     location: 'California', 
     tags: ['mountains', 'nature', 'sunrise'],
    Date: '2025-09-10T19:30:00Z',
  },
    {
    id: '4',
    title: 'Mountain View',
    description: 'A beautiful mountain view during sunrise.',
    image: 'https://picsum.photos/200/300?random=4',
     location: 'California', 
     tags: ['mountains', 'nature', 'sunrise'],
    Date: '2025-09-10T19:30:00Z',
  },
  {
    id: '5',
    title: 'City Life',
    description: 'The hustle and bustle of the city streets.',
    image: 'https://picsum.photos/200/300?random=5',
     location: 'California', 
     tags: ['mountains', 'nature', 'sunrise'],
    Date: '2025-09-10T19:30:00Z',
  },
  {
    id: '6',
    title: 'Beach Vibes',
    description: 'Relaxing at the sunny beach with waves.',
    image: 'https://picsum.photos/200/300?random=6',
     location: 'California', 
     tags: ['mountains', 'nature', 'sunrise'],
    Date: '2025-09-10T19:30:00Z',
  },
    {
    id: '7',
    title: 'Mountain View',
    description: 'A beautiful mountain view during sunrise.',
    image: 'https://picsum.photos/200/300?random=7',
     location: 'California',
     tags: ['mountains', 'nature', 'sunrise'], 
    Date: '2025-09-10T19:30:00Z',
  },
  {
    id: '8',
    title: 'City Life',
    description: 'The hustle and bustle of the city streets.',
    image: 'https://picsum.photos/200/300?random=8',
     location: 'California', 
     tags: ['mountains', 'nature', 'sunrise'],
    Date: '2025-09-10T19:30:00Z',
  },
  {
    id: '9',
    title: 'Beach Vibes',
    description: 'Relaxing at the sunny beach with waves.',
    image: 'https://picsum.photos/200/300?random=9',
     location: 'California', 
     tags: ['mountains', 'nature', 'sunrise'],
    Date: '2025-09-10T19:30:00Z',
  },
];

 

const HomeScreen = () => {

  const {isOpen,openModel, closeModel}=modelStore();
  const {FilterInput,setFilterInput,setFilteredData}=FilterStore();

    const handleSubmitFilter = () => {
    const newFilteredData = data.filter(item =>
      item.title.toLowerCase().includes(FilterInput.toLowerCase()) ||
      item.location.toLowerCase().includes(FilterInput.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(FilterInput.toLowerCase()))
    );
    setFilteredData(newFilteredData);
    closeModel();
  };



  return (
    <View style={styles.container}>
        <StatusBar model={isOpen} openModel={openModel} closeModel={closeModel}/>
        <Text style={styles.heading}>Popular Properties</Text>
          <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <CustomCard item={item} routeName="SingleProperty"/>}
      contentContainerStyle={{ padding: 18 }}
    />

<Modal
  animationType="slide"
  transparent={true} // important for background overlay
  visible={isOpen}
  onRequestClose={() => {
    closeModel();
  }}
>
  <View style={styles.modalOverlay}>
    <View style={styles.modalContainer}>
     <InputField value={FilterInput} onChangeText={setFilterInput} />
      <TouchableOpacity
        style={styles.closeButton}
       onPress={() => handleSubmitFilter()} >
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Submit</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>

      
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
         flex:1
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    paddingVertical:10,
    paddingLeft:10,
    fontFamily:"PlayfairDisplaySC-Black"
  },
   modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // semi-transparent background
    justifyContent: 'center', // centers vertically
    alignItems: 'center',     // centers horizontally
  },
  modalContainer: {
    width: '80%',             // modal width
    height: '25%',            // modal height
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    justifyContent: 'space-between', // optional
  },
  closeButton: {
    backgroundColor: '#0b5a0cff',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  });

export default HomeScreen;
