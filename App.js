import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Select from './Components/Select';
import CardScreen from './Components/CardScreen';
import GameOver from './Components/GameOver';
import GameWin from './Components/GameWin';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Select />
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Select} />
        <Stack.Screen name="card" component={CardScreen} />
        <Stack.Screen name="lose" component={GameOver} />
        <Stack.Screen name="win" component={GameWin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

