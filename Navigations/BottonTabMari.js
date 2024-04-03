import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import Home  from './Screens/Home'; 
import Login  from './Screens/Login'; 
import Carrinho from "./Screens/Home";

export default function App (){

  const Tab = createBottomTabNavigator();
  
  return(
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Login" /*Define como primeira rota de quando o usuario entra */
                screenOptions={{
                  tabBarActiveTintColor: '#841584',
                  tabBarActiveBackgroundColor: 'FFA500',
                  tabBarInactiveTintColor: 'black', 
                  tabBarInactiveBackgroundColor: "#c6c6c6",
                  headerStyle:  {backgroundColor:'f00'},
                  headerTitleColor: '#ffA',
                  headerTitleAlign: 'center',

                }}
            >
                <Tab.Screen name="Home"     component={Home}
                    options={{
                        tabBarLabel: 'Homes',
                        tabBarIcon: ({color, size}) => (
                          <Ionicons name="home" size= {24} color={color} />  
                        )
                    }}
                />
                <Tab.Screen name="Login"    component={Login}
                    options={{
                        tabBarLabel: 'Login',
                        tabBarIcon: ({color, size}) => (
                          <Ionicons name="log-in" size= {24} color={color} />  
                        )
                    }}
                />
                <Tab.Screen name="Carrinho" component={Carrinho}
                    options={{
                        tabBarLabel: 'Carrinho',
                        tabBarIcon: ({color, size}) => (
                          <Ionicons name="car" size= {24} color={color} />  
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}