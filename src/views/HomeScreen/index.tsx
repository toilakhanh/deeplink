import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Layout} from '@src/components';
import Lottie from 'lottie-react-native';

const HomeScreen = () => {
  return (
    <Layout title="HomeScreen">
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Lottie
            source={{
              uri: 'https://assets3.lottiefiles.com/packages/lf20_ukkmrz6p.json',
            }}
            style={{
              marginBottom: 50,
            }}
          />
        </View>
      </View>
    </Layout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
