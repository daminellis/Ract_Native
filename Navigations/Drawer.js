import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import 'react-native-gesture-handler';

import Home from './Screens/Home';
import Login from './Screens/Login';
import Carrinho from './Screens/Carrinho';

export default function App() {

  const Drawer = createDrawerNavigator();

  return(
    <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name="Login" component={Login}/>
            <Drawer.Screen name="Home" component={Home}/>
            <Drawer.Screen name="Carrinho" component={Carrinho}/>
        </Drawer.Navigator>
    </NavigationContainer>
  )
} 