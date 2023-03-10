import {View, Text, Button} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SettingStackParamList} from '@src/navigation/types';
// import {RootStackParamList} from '@src/model';
// import {useRoute} from '@react-navigation/native';

const SettingScreen = ({
  navigation,
}: NativeStackScreenProps<SettingStackParamList, 'SettingScreen'>) => {
  return (
    <View>
      <Text>SettingScreen</Text>
      <Button
        title="Settingggggg"
        onPress={() => navigation.navigate('HomeStack')}
      />
    </View>
  );
};

export default SettingScreen;
