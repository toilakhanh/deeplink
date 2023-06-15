import {
  SafeAreaView,
  StatusBar,
  StatusBarStyle,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import HeaderComponent from '../Header';

type LayoutProps = {
  children: JSX.Element;
  title: string;
  barStyle?: StatusBarStyle;
};

const Layout = ({children, title, barStyle}: LayoutProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={barStyle ? barStyle : 'dark-content'} />
      <HeaderComponent title={title} />
      {children}
    </SafeAreaView>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
