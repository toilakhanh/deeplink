/* eslint-disable react-hooks/exhaustive-deps */
import {useKeyboard} from '@react-native-community/hooks';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useRef} from 'react';
import {Animated, Easing} from 'react-native';
import {HEIGHT} from '../assets/styles';
import {DrawerParams} from '../navigation';
import {AccountState, login} from '../store/authSlice';
import {useCustomDispatch, useCustomSelector} from './reduxHook';

const SCROLL_TIME = 320;

const useLogin = () => {
  const navigation = useNavigation<DrawerNavigationProp<DrawerParams>>();
  const keyboard = useKeyboard();
  const dispatch = useCustomDispatch();
  const auth = useCustomSelector(store => store.auth);
  const loading = auth.loading;
  const yBottomView = useRef(new Animated.Value(50)).current;
  const sizeIcon = useRef(new Animated.Value(70)).current;
  const heightImage = useRef(new Animated.Value(180)).current;
  const opacityImage = useRef(new Animated.Value(1)).current;

  const scrollViewBot = () => {
    const yBottom = HEIGHT - keyboard.coordinates.end.screenY;
    Animated.timing(yBottomView, {
      duration: SCROLL_TIME,
      toValue: yBottom === 0 ? 50 : yBottom + 10,
      useNativeDriver: false,
      easing: Easing.bezier(0.25, 0.46, 0.45, 0.94),
    }).start();
  };

  const scrollImage = () => {
    const keyboardShown = HEIGHT > keyboard.coordinates.end.screenY;
    Animated.timing(heightImage, {
      duration: SCROLL_TIME,
      toValue: keyboardShown ? 120 : 180,
      useNativeDriver: false,
    }).start();
    Animated.timing(opacityImage, {
      duration: SCROLL_TIME,
      toValue: keyboardShown ? 0 : 1,
      useNativeDriver: false,
    }).start();
  };

  const scrollIcon = () => {
    const keyboardShown = HEIGHT > keyboard.coordinates.end.screenY;
    Animated.timing(sizeIcon, {
      duration: SCROLL_TIME,
      toValue: keyboardShown ? 60 : 70,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    if (keyboard.coordinates.end.screenY <= 0) {
      return;
    }
    scrollViewBot();
    scrollImage();
    scrollIcon();
  }, [keyboard.coordinates.end.screenY]);

  useEffect(() => {
    if (auth.data) {
      navigation.navigate('Tab');
    }
  }, [auth.data]);

  const _login = (account: AccountState) => {
    dispatch(login(account));
  };

  return {yBottomView, sizeIcon, heightImage, opacityImage, _login, loading};
};

export default useLogin;
