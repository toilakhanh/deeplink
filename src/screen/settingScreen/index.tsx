import {View, Text, Button} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation';

type Props = NativeStackScreenProps<RootStackParams, 'SettingStack'>;

const SettingScreen = ({navigation}: Props) => {
  return (
    <View>
      <Text>SettingScreen</Text>
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

export default SettingScreen;
