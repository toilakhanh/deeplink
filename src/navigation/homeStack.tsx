import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {HomeScreen} from 'src/screen';
import {HomeStackParamList} from './types';

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: true}}
      initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}
