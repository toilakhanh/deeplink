import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import HomeStack from './homeStack';
import SettingStack from './settingStack';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="HomeStack" component={HomeStack} />
        <Tab.Screen name="SettingStack" component={SettingStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
