import App from '@src/navigation';
import * as React from 'react';
import {SafeAreaView} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function AppContainer() {
  return (
    <SafeAreaProvider>
      <SafeAreaView />
      <App />
    </SafeAreaProvider>
  );
}
