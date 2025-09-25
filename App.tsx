

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import AuthScreen from './src/screens/AuthScreen';
import SingleProperty from './src/components/SingleProperty';
import Wishlists from './src/screens/Wishlists';
function App() {

  const Stack=createNativeStackNavigator();


  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Auth" screenOptions={{headerShown:false}} >
         <Stack.Screen name="Auth" component={AuthScreen} />
         <Stack.Screen name="Home" component={HomeScreen} />
         <Stack.Screen name='SingleProperty' component={SingleProperty} />
           <Stack.Screen name='WishList' component={Wishlists} />
    </Stack.Navigator>
    </NavigationContainer>
    
  );
}


export default App;
