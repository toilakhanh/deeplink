import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {Text, View} from 'react-native';
import {DetailScreen, HomeScreen} from 'src/screen';
import HeaderComponent from '../components/headerComponent';

export type HomeStackParams = {
  HomeScreen: {
    isParentScreen: boolean;
  };
  DetailScreen: {
    name: string;
  };
};

const HomeStack = createNativeStackNavigator<HomeStackParams>();

export default function HomeScreenStack() {
  return (
    <HomeStack.Navigator screenOptions={{}} initialRouteName="HomeScreen">
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          header: () => <HeaderComponent />,
        }}
      />
      <HomeStack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{
          header: () => <HeaderComponent />,
        }}
      />
    </HomeStack.Navigator>
  );
}
