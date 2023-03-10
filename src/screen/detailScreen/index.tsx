import {View, Text} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '@src/navigation/types';

const DetailScreen = ({
  navigation,
}: NativeStackScreenProps<HomeStackParamList, 'DetailScreen'>) => {
  return (
    <View>
      <Text>DetailScreen</Text>
    </View>
  );
};

export default DetailScreen;
