import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Details = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Button title="back" onPress={navigation.goBack} />
      <Text>Details</Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
