import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {Text, View} from 'react-native';
import {DetailScreen} from '@src/views';
import HeaderComponent from '../components/headerComponent';
import {HomeController} from '../controllers';

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
        component={HomeController}
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
