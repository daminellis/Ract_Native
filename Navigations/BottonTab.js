import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

import Home from './Screens/Home';
import Login from './Screens/Login';
import Carrinho from './Screens/Carrinho';

export default function App() {

  const Tab = createBottomTabNavigator();

  return(
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = faHome;
            } else if (route.name === 'Login') {
              iconName = faUser;
            } else if (route.name === 'Carrinho') {
              iconName = faShoppingCart;
            }

            return <FontAwesomeIcon icon={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#C71585',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name='Login' component={Login} />
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Carrinho' component={Carrinho} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
