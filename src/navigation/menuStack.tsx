import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {MenuScreen} from '@src/views';

export type MenuStackParams = {
  MenuScreen: undefined;
};

const MenuStack = createNativeStackNavigator<MenuStackParams>();

export default function MenuScreenStack() {
  return (
    <MenuStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="MenuScreen">
      <MenuStack.Screen name="MenuScreen" component={MenuScreen} />
    </MenuStack.Navigator>
  );
}
