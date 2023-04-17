import {RouteProp, useRoute} from '@react-navigation/native';
// import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {BackIcon, BoldMenuIcon} from 'src/assets';
import {colors} from 'src/assets/styles';

type route = RouteProp<{params: {isParentScreen: boolean; title: string}}>;

// type Props = NativeStackHeaderProps & params;

const HeaderComponent = () => {
  const route: route = useRoute();
  const params = route.params;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, !params?.isParentScreen && styles.buttonBack]}>
        <Image
          source={params?.isParentScreen ? BoldMenuIcon : BackIcon}
          style={styles.leftIcon}
          resizeMode={'stretch'}
        />
      </TouchableOpacity>
      {/* <Text style={styles.title}>{params?.title}</Text> */}
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  button: {
    height: 50,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonBack: {
    width: 50,
  },
  leftIcon: {
    height: 19,
    width: 16,
  },
  title: {color: colors.blue, fontWeight: 'bold', fontSize: 26},
});
