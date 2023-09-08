import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ChoiceDigimon from '../pages/ChoiceDigimon/ChoiceDigimons';
import DigimonSelector from '../pages/ChoiceDigimon/DigimonSelector';

const Stack = createNativeStackNavigator();

export default function DigiPathRoute() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ChoiceDigimon" component={ChoiceDigimon} />
      <Stack.Screen name="DigimonSelector" component={DigimonSelector} />
    </Stack.Navigator>
  );
}
