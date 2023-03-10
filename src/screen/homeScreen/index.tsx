import {View, Text} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '@src/navigation/types';

const HomeScreen = ({
  navigation,
}: NativeStackScreenProps<HomeStackParamList, 'HomeScreen'>) => {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
