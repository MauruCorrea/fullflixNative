import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './view/Login';
import Registre from './view/Registre';
import Home from './view/Home';
import Details from './view/Details';

const Stack = createNativeStackNavigator();

export function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='Registre' component={Registre} options={{ headerShown: false }} />
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
        <Stack.Screen name='Details' component={Details} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
