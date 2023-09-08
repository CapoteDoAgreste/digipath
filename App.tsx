import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import DigimonProfileHome from './src/pages/DigimonProfiles';
import DigiPathRoute from './src/routes/DigiPathRoutes';

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#e8f6fa',
    flex: 1,
  },
});
const Tab = createBottomTabNavigator();
function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.background}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown: false}}>
          <Tab.Screen name="DigiPath" component={DigiPathRoute} />
          <Tab.Screen name="DigiProfile" component={DigimonProfileHome} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
