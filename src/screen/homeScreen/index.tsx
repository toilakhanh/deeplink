import {View, Text, Button, Dimensions} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation';

type Props = NativeStackScreenProps<RootStackParams, 'HomeStack'>;

const HomeScreen = ({navigation}: Props) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Go to Detail"
        onPress={() => {
          navigation.navigate('DetailScreen', {name: 'String'});
        }}
      />
    </View>
  );
};

export default HomeScreen;
