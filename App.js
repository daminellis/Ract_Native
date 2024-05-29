import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Detalhes from "./src/pages/Detalhes";
import NovasTarefas from "./src/pages/NovasTarefas";
import Tarefas from "./src/pages/Tarefas";

export default function App() {
  const Stack = createStackNavigator();
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Detalhes' component={Detalhes} />
        <Stack.Screen name='NovasTarefas' component={NovasTarefas} />
        <Stack.Screen name='Tarefas' component={Tarefas} />
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
