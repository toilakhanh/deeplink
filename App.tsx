import * as React from 'react';
import App from '@src/navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function AppContainer() {
  return (
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  );
}
