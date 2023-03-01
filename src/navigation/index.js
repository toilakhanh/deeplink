import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '@src/screen/home';
import Details from '@src/screen/details';
import {screenName} from '@src/utils/const';

const Stack = createNativeStackNavigator();

const stackScreen = [
  {
    name: screenName.HOME,
    component: Home,
    headerShown: false,
  },
  {
    name: screenName.DETAILS,
    component: Details,
    headerShown: true,
  },
];

export default function AppContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name={screenName.HOME} component={Home} />
        <Stack.Screen name={screenName.DETAILS} component={Details} /> */}
        {stackScreen.map(screen => (
          <Stack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={{headerShown: screen.headerShown}}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
