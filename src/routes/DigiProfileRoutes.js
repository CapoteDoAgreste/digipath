import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import DigiDB from '../mocks/DigiDB';

import DigimonSelector from '../pages/ChoiceDigimon/DigimonSelector';
import DigimonProfile from '../pages/DigimonProfiles/DigimonProfile';

const Stack = createNativeStackNavigator();

const list = new DigiDB().digimonData.digimons;

export default function DigimonProfileRoutes() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="DigimonProfileSelector"
        component={DigimonProfile}
        initialParams={list[0]}
      />
      <Stack.Screen
        name="DigimonSelector"
        component={DigimonSelector}
        initialParams={{list: list, set: null}}
      />
    </Stack.Navigator>
  );
}
