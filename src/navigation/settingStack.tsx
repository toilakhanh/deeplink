import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {SettingScreen} from 'src/screen';
import {SettingStackParamList} from './types';

const Stack = createNativeStackNavigator<SettingStackParamList>();

export default function SettingStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: true}}
      initialRouteName="SettingScreen">
      <Stack.Screen name="SettingScreen" component={SettingScreen} />
    </Stack.Navigator>
  );
}
