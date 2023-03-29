import AppText from '../appText';
import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {colors, fontSize, padding} from 'src/assets/styles';

interface AppButtonProps extends TouchableOpacityProps {
  children?: any;
  title?: any;
  textStyle?: TextStyle;
  transparent?: boolean;
  style?: StyleProp<ViewStyle>;
}
const AppButton = (props: AppButtonProps) => {
  return (
    <TouchableOpacity
      {...props}
      style={[!props.transparent && styles.defaultStyle, props.style]}>
      {props.title ? (
        <AppText style={[styles.defaultTextStyle, props.textStyle]}>
          {props.title}
        </AppText>
      ) : (
        props.children
      )}
    </TouchableOpacity>
  );
};
export default AppButton;

const styles = StyleSheet.create({
  defaultStyle: {
    backgroundColor: colors.blue,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: padding.p12,
    borderRadius: padding.p8,
  },
  defaultTextStyle: {
    color: colors.white,
    fontSize: fontSize.f14,
    fontWeight: '700',
  },
});
