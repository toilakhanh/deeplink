import React from 'react';
import {StyleProp, StyleSheet, Text, TextProps, TextStyle} from 'react-native';
// import {useTranslation} from 'react-i18next';

interface AppTextProps extends TextProps {
  children?: any;
  style?: StyleProp<TextStyle>;
}

export default (props: AppTextProps) => {
  // const {t} = useTranslation();
  // const font = t('font');
  // const fontFamily = {fontFamily: font};
  return (
    <Text {...props} style={[styles.defaultText, props.style]}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  defaultText: {
    // color: color.black,
    // fontSize: fontSize.f14,
  },
});
