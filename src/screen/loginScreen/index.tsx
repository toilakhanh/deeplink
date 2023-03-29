/* eslint-disable react-hooks/exhaustive-deps */
import {useKeyboard} from '@react-native-community/hooks';
import {Formik} from 'formik';
import React, {useEffect, useRef} from 'react';
import {Animated, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {Easing} from 'react-native-reanimated';
import Reactotron from 'reactotron-react-native';
import * as yup from 'yup';
import {BackgroundLoginImage, FacebookIcon} from 'src/assets';
import {colors, fontSize, HEIGHT, margin} from 'src/assets/styles';
import AppButton from 'src/components/appButton';
import AppTextInput from 'src/components/appTextInput';

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter correct email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, ({min}) => `Passwords must be at least ${min} characters`)
    .max(16, ({max}) => `Passwords must be at maximum ${max} characters`)
    .required('Passwords is required')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      'Passwords must have both letters and numbers',
    ),
});

const SCROLL_TIME = 320;

const LoginScreen: React.FC = () => {
  const keyboard = useKeyboard();
  Reactotron.log(keyboard);
  const yBottomView = useRef(new Animated.Value(50)).current;
  const sizeIcon = useRef(new Animated.Value(70)).current;
  const heightImage = useRef(new Animated.Value(200)).current;
  const opacityImage = useRef(new Animated.Value(1)).current;

  const scrollViewBot = () => {
    const yBottom = HEIGHT - keyboard.coordinates.end.screenY;
    Animated.timing(yBottomView, {
      duration: SCROLL_TIME,
      toValue: yBottom === 0 ? 50 : yBottom + 10,
      useNativeDriver: false,
      easing: Easing.bezier(0.25, 0.46, 0.45, 0.94).factory(),
    }).start();
  };

  const scrollImage = () => {
    const keyboardShown = HEIGHT > keyboard.coordinates.end.screenY;
    Animated.timing(heightImage, {
      duration: SCROLL_TIME,
      toValue: keyboardShown ? 120 : 200,
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
      toValue: keyboardShown ? 50 : 70,
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

  return (
    <View style={styles.container}>
      <Animated.View>
        <Animated.View
          style={{
            backgroundColor: colors.darkBlue,
            width: '100%',
            height: heightImage,
            justifyContent: 'center',
          }}>
          <Animated.Image
            source={BackgroundLoginImage}
            style={{
              width: '100%',
              height: heightImage,
              opacity: opacityImage,
              position: 'absolute',
            }}
          />
          <Animated.Image
            source={FacebookIcon}
            style={{
              width: sizeIcon,
              height: sizeIcon,
              alignSelf: 'center',
              tintColor: colors.white,
            }}
          />
        </Animated.View>
      </Animated.View>
      <Formik
        initialValues={{email: '', password: ''}}
        validateOnMount
        onSubmit={values => console.log(values)}
        validationSchema={loginValidationSchema}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
          isValid,
        }) => (
          <View style={{marginTop: margin.m32}}>
            <AppTextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              error={errors.email}
              touched={touched.email}
              placeHolder={'Phone number or email'}
              style={styles.textInputEmail}
            />
            <AppTextInput
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              error={errors.password}
              touched={touched.password}
              placeHolder={'Password'}
              style={styles.textInputPassword}
            />
            <AppButton
              title={'Log in'}
              style={styles.buttonLogin}
              onPress={handleSubmit}
              disabled={!isValid}
              textStyle={styles.titleButtonLogin}
            />
          </View>
        )}
      </Formik>
      <AppButton
        title={'Forgot Password?'}
        style={styles.buttonForgot}
        textStyle={styles.titleButton}
        onPress={() => {
          // updateBot(600);
        }}
      />
      <AppButton
        title={'Back'}
        style={styles.buttonBack}
        textStyle={styles.titleButton}
      />
      <Animated.View style={[styles.viewBottom, {bottom: yBottomView}]}>
        <View style={styles.viewRow}>
          <View style={styles.line} />
          <Text style={styles.textOr}>Or</Text>
          <View style={styles.line} />
        </View>
        <AppButton
          title={'Create new account'}
          style={styles.buttonCreate}
          textStyle={styles.titleCreate}
        />
      </Animated.View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  textInputEmail: {
    width: '90%',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomWidth: 0,
  },
  textInputPassword: {
    width: '90%',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  buttonLogin: {
    borderRadius: 8,
    width: '90%',
    backgroundColor: colors.blue,
    alignSelf: 'center',
    marginTop: margin.m12,
  },
  buttonCreate: {
    backgroundColor: colors.lightBlue,
    width: '90%',
    alignSelf: 'center',
  },
  titleButtonLogin: {
    fontSize: fontSize.f16,
    fontWeight: '600',
    color: colors.white,
  },
  titleButton: {
    fontSize: fontSize.f16,
    fontWeight: '700',
    color: colors.blue,
  },
  titleCreate: {fontSize: fontSize.f16, color: colors.blue},
  buttonForgot: {
    alignSelf: 'center',
    backgroundColor: colors.white,
    height: 35,
    marginTop: margin.m16,
    width: '50%',
  },
  buttonBack: {
    alignSelf: 'center',
    backgroundColor: colors.white,
    height: 35,
    width: '50%',
  },
  line: {
    height: 1,
    backgroundColor: colors.lightGray,
    width: '30%',
  },
  textOr: {
    margin: margin.m8,
    fontSize: fontSize.f16,
    fontWeight: '600',
  },
  viewRow: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  viewBottom: {
    position: 'absolute',
    width: '100%',
  },
});
