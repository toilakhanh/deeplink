import {View, Text, Button} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation';

type Props = NativeStackScreenProps<RootStackParams, 'MenuStack'>;

const MenuScreen = ({navigation}: Props) => {
  return (
    <View>
      <Text>MenuScreen</Text>
      <Button
        title="Settingggggg"
        onPress={() =>
          navigation.navigate('HomeStack', {
            screen: 'DetailScreen',
            params: {name: 'string'},
          })
        }
      />
    </View>
  );
};

export default MenuScreen;
