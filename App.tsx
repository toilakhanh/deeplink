import App from '@src/navigation';
import * as React from 'react';
import {SafeAreaView} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {store} from './src/store';
import {Provider} from 'react-redux';
export default function AppContainer() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <SafeAreaView />
        <App />
      </Provider>
    </SafeAreaProvider>
  );
}
