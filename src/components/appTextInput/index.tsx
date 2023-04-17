import {
  KeyboardType,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {colors} from 'src/assets/styles';

type Props = {
  title?: string;
  onChangeText: (e: string) => void;
  onBlur: (e: any) => void;
  value: string;
  error: string | undefined;
  touched: boolean | undefined;
  disabled?: boolean;
  multiline?: boolean;
  maxLength?: number;
  style?: StyleProp<ViewStyle>;
  placeHolder?: string;
  keyboardType?: KeyboardType;
  secureTextEntry?: boolean;
};

const AppTextInput = (props: Props) => {
  const {
    title,
    onChangeText,
    onBlur,
    value,
    error,
    touched,
    disabled,
    multiline,
    style,
    placeHolder,
    keyboardType,
    secureTextEntry,
  } = props;
  return (
    <View>
      {!!title && <Text>{title}</Text>}
      <TextInput
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        editable={!disabled}
        multiline={multiline}
        style={[styles.defaultTextInputStyle, style]}
        placeholder={placeHolder}
        keyboardType={keyboardType}
        autoCorrect={false}
        spellCheck={false}
        secureTextEntry={secureTextEntry}
      />
      {error && touched && <Text>{error}</Text>}
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  defaultTextInputStyle: {
    alignSelf: 'center',
    borderWidth: 0.5,
    fontSize: 16,
    borderRadius: 4,
    borderColor: colors.lightGray,
    padding: 8,
    width: '100%',
  },
});
