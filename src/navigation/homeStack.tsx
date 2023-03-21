import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {DetailScreen, HomeScreen} from 'src/screen';

export type HomeStackParams = {
  HomeScreen: undefined;
  DetailScreen: {
    name: string;
  };
};

const HomeStack = createNativeStackNavigator<HomeStackParams>();

export default function HomeScreenStack() {
  return (
    <HomeStack.Navigator
      screenOptions={{headerShown: true}}
      initialRouteName="HomeScreen">
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="DetailScreen" component={DetailScreen} />
    </HomeStack.Navigator>
  );
}
