import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@react-native-vector-icons/ionicons';



const AuthScreen = () => {
    const navigation = useNavigation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [signUpPressed, setSignUpPressed] = useState(false);

  const bgColor = isDarkMode ? '#222' : '#eef';
  const textColor = isDarkMode ? '#fff' : '#333';
  const subTextColor = isDarkMode ? '#aaa' : '#555';
  const loginButtonBg = isDarkMode ? '#444' : '#fff';
  const loginTextColor = isDarkMode ? '#fff' : 'red';
  
    const imgBackground=isDarkMode ? '#fff' : '';
    const imgBorderRadius=isDarkMode ? 80 : '';

  return (
    <View style={[styles.container, { backgroundColor: bgColor  }]}>
      {/* Dark Mode Switch */}
      <View style={styles.switchContainer}>
        <Text style={{ color: textColor, marginRight: 10 }}>Dark Mode</Text>
        <Switch
          
          value={isDarkMode}
          onValueChange={setIsDarkMode}
          trackColor={{ false: '#ccc', true: '#5A38A5' }}
          thumbColor={isDarkMode ? '#white' : '#f4f3f4'}
          style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
        />
      </View>
    
      <Ionicons name="location" size={100} color={isDarkMode ? '#fff' : '#5A38A5'} />
      <Text style={[styles.Heading, { color: textColor }]}>Travel Journal</Text>
      <Text style={[styles.SubHeading, { color: subTextColor }]}>
        Capture Your Adventures, Anywhere
      </Text>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: signUpPressed ? '#5A38A5' : '#704BBF' },
          ]}
          activeOpacity={0.6}
          onPressIn={() => setSignUpPressed(true)}
          onPressOut={() => setSignUpPressed(false)}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  switchContainer: {
    flexDirection: 'column',
    position: 'absolute',
    top: 50,
    right: 20,
    alignItems: 'center',
  },
  Heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
  },
  SubHeading: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default AuthScreen;
