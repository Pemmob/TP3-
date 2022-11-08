import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './page/welcome.js';
import Home from './page/project_list.js';
import Penghitung from './page/minggu3.js';
import DataDiri from './page/minggu4.js';
import Profil from './page/minggu5.js';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>   
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profil" component={Profil} /> 
        <Stack.Screen name="Penghitung" component={Penghitung} />
        <Stack.Screen name="DataDiri" component={DataDiri} />              
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
