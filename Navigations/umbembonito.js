import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

import Home from './Screens/Home';
import Login from './Screens/Login';
import Carrinho from './Screens/Carrinho';
import Notif from './Screens/Notif';

function HomeTabs() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = faHome;
                    } else if (route.name === 'Carrinho') {
                        iconName = faShoppingCart; 
                    }
                    return <FontAwesomeIcon icon={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#C71585',
                tabBarInactiveTintColor: 'gray',
            })}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Carrinho" component={Carrinho} />
        </Tab.Navigator>
    );
}

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen options={{headerShown:false}} name='Home' component={HomeTabs} />
                <Stack.Screen name='Notificação' component={Notif} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
