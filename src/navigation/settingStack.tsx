import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SettingScreen} from 'src/screen/';

export type SettingStackParams = {
  SettingScreen: undefined;
};

const SettingStack = createNativeStackNavigator<SettingStackParams>();

export default function SettingScreenStack() {
  return (
    <SettingStack.Navigator
      screenOptions={{headerShown: true}}
      initialRouteName="SettingScreen">
      <SettingStack.Screen name="SettingScreen" component={SettingScreen} />
    </SettingStack.Navigator>
  );
}
