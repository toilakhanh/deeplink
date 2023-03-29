import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {Button, Image, Text, View} from 'react-native';
import {colors} from 'src/assets/styles';
import {RootStackParams} from 'src/navigation';
import {title} from 'src/utils/const';

type Props = NativeStackScreenProps<RootStackParams, 'HomeStack'>;

const HomeScreen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setParams({isParentScreen: true, title: title.HomeScreen});
  }, [navigation]);

  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          paddingHorizontal: 15,
          paddingVertical: 10,
        }}>
        <Image
          source={{
            uri: 'https://i.pinimg.com/550x/44/08/a6/4408a6dc6522c66e387890225bd86e16.jpg',
          }}
          style={{
            height: 40,
            width: 40,
            borderWidth: 0.5,
            borderColor: colors.lightGray,
            borderRadius: 50,
          }}
        />
      </View>
      {/* <Text>HomeScreen</Text>
      <Button
        title="Go to Detail"
        onPress={() => {
          navigation.navigate('DetailScreen', {name: 'String'});
        }}
      /> */}
    </View>
  );
};

export default HomeScreen;
