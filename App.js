import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Task from "./src/pages/Task";
import NewTask from "./src/pages/NewTask";
import Details from "./src/pages/Details";
import Login from "./src/pages/Login";
import NewUser from "./src/pages/NewUser"

export default function App() {
  const Stack = createStackNavigator();
  return (

    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Login"
      screenOptions={{
        headerTintColor: "#373d20"
      }}>
        <Stack.Screen 
        name='Login'
        component={Login} 
        options={{headerShown:false}}/>

        <Stack.Screen
        name='NewUser'
        component={NewUser}
        options={{headerShown:false}}/>

        <Stack.Screen
        name='Task'
        component={Task} 
        options={{headerShown:null}}/>

        <Stack.Screen
        name='Details'
        component={Details} />
        
        <Stack.Screen 
        name='NewTask'
        component={NewTask} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
