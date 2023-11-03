import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import DigiPathRoute from './src/routes/DigiPathRoutes';
import DigimonProfileRoutes from './src/routes/DigiProfileRoutes';

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
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: '#007fa6',
            tabBarInactiveTintColor: '#a9a9a9',
            headerShown: false,
            tabBarIconStyle: {display: 'none'},
            tabBarLabelStyle: {
              marginBottom: 15,
              fontSize: 16,
              fontWeight: 'bold',
            },
          }}>
          <Tab.Screen name="DigiPath" component={DigiPathRoute} />
          <Tab.Screen name="DigiProfile" component={DigimonProfileRoutes} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
