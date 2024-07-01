import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ListScreen from './screens/ListScreen';
import AnimationScreen from './screens/AnimationScreen';
import NetworkScreen from './screens/NetworkScreen';
import CalculationScreen from './screens/CalculationScreen';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="List" component={ListScreen} />
        <Tab.Screen name="Animations" component={AnimationScreen} />
        <Tab.Screen name="Network" component={NetworkScreen} />
        <Tab.Screen name="Calculations" component={CalculationScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
