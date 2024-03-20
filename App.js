import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {SafeAreaView, Text, Image, View, Button, StyleSheet} from 'react-native';
import Profile from './Components/Profile';
import Home from './Components/Home';
import Login from './Components/Login';

export default function App() {

   const Stack = createStackNavigator();

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Profile' component={Profile}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}