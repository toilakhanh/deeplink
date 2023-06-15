import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen, MoneyScreen} from '../views';
type DrawerParamList = {
  Home: undefined;
  Money: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Money" component={MoneyScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
