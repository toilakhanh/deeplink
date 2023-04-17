import {Formik} from 'formik';
import React from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';
import {BackgroundLoginImage, FacebookIcon} from 'src/assets';
import {colors, fontSize, margin} from 'src/assets/styles';
import AppButton from 'src/components/appButton';
import AppTextInput from 'src/components/appTextInput';
import {AccountState} from '../../store/authSlice';
import {loginValidationSchema} from '../../utils/schema';
import Lottie from 'lottie-react-native';

interface Props {
  yBottomView: Animated.Value;
  heightImage: Animated.Value;
  sizeIcon: Animated.Value;
  opacityImage: Animated.Value;
  _login: (params: AccountState) => void;
  loading: boolean;
}

const initialValues = {email: 'eve.holt@reqres.in', password: 'cityslicka'};

const LoginScreen: React.FC<Props> = props => {
  const {yBottomView, sizeIcon, heightImage, opacityImage, _login, loading} =
    props;
  return (
    <View style={styles.container}>
      <Animated.View>
        <Animated.View
          style={{
            ...styles.viewTop,
            height: heightImage,
          }}>
          <Animated.Image
            source={BackgroundLoginImage}
            style={{
              ...styles.imgBackground,
              height: heightImage,
              opacity: opacityImage,
            }}
          />
          <Animated.Image
            source={FacebookIcon}
            style={{
              ...styles.logoTop,
              width: sizeIcon,
              height: sizeIcon,
            }}
          />
        </Animated.View>
      </Animated.View>
      <Formik
        initialValues={initialValues}
        validateOnMount
        onSubmit={values => _login(values)}
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
              secureTextEntry
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
        onPress={() => {}}
      />
      {/* <AppButton
        title={'Back'}
        style={styles.buttonBack}
        textStyle={styles.titleButton}
      /> */}
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
      {loading && (
        <View style={styles.viewLoading}>
          <Lottie
            source={require('src/assets/lottie/loading.json')}
            autoPlay
            loop
          />
        </View>
      )}
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
  viewTop: {
    backgroundColor: colors.darkBlue,
    width: '100%',
    justifyContent: 'center',
  },
  imgBackground: {
    width: '100%',
    position: 'absolute',
  },
  logoTop: {
    alignSelf: 'center',
    tintColor: colors.white,
  },
  viewLoading: {
    position: 'absolute',
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
