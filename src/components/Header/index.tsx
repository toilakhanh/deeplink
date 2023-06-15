import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {MenuIcon} from '@src/assets';
import {DrawerActions, useNavigation} from '@react-navigation/native';

type HeaderProps = {
  title?: string;
};

const HeaderComponent = ({title}: HeaderProps) => {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuButton} onPress={openDrawer}>
        <Image source={MenuIcon} style={styles.menuIcon} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuButton: {
    position: 'absolute',
    left: 0,
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {
    height: 24,
    width: 24,
  },
  title: {fontSize: 20, fontWeight: '600'},
});
