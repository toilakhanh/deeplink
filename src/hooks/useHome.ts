import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../navigation';
import {title} from '../utils/const';

const useHome = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams, 'HomeStack'>>();
  const [showModalStatus, setShowModalStatus] = useState(false);

  useEffect(() => {
    navigation.setParams({isParentScreen: true, title: title.HomeScreen});
  }, [navigation]);

  const _openModal = () => {
    setShowModalStatus(true);
  };

  const _closeModal = () => {
    setShowModalStatus(false);
  };

  const _openImageGallery = () => {};

  return {showModalStatus, _openModal, _closeModal, _openImageGallery};
};

export default useHome;
