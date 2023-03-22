/* eslint-disable react-hooks/exhaustive-deps */
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {
  NavigationContainer,
  NavigatorScreenParams,
  useNavigation,
} from '@react-navigation/native';
import * as React from 'react';
import {Animated, ImageSourcePropType, StyleSheet} from 'react-native';
import {
  GamingIcon,
  HomeIcon,
  MenuIcon,
  NotificationIcon,
  WatchIcon,
} from '../assets';
import HomeScreenStack, {HomeStackParams} from './homeStack';
import SettingScreenStack from './settingStack';
import {useTheme} from 'react-native-paper';
import {colors} from '../assets/styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export type RootStackParams = {
  HomeStack: NavigatorScreenParams<HomeStackParams>;
  SettingStack: undefined;
  WatchStack: undefined;
  GamingStack: undefined;
  NotificationStack: undefined;
  DetailScreen: {
    name: string;
  };
};

const Tab = createMaterialBottomTabNavigator<RootStackParams>();

function App() {
  const navigation = useNavigation();

  const fadeAnim = React.useRef(new Animated.Value(1)).current;
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  theme.colors.secondaryContainer = 'transparent';

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('state', () => {
      fadeAnim.setValue(0.3);
      fadeIn();
    });
    return unsubscribe;
  }, []);

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Tab.Navigator
      barStyle={{...styles.barStyle, marginBottom: insets.bottom}}
      activeColor={colors.blue}
      inactiveColor={colors.gray}
      sceneAnimationEnabled={true}
      sceneAnimationType={'shifting'}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({color, focused}) => {
          let iconName: ImageSourcePropType;
          switch (route.name) {
            case 'HomeStack':
              iconName = HomeIcon;
              break;
            case 'WatchStack':
              iconName = WatchIcon;
              break;
            case 'GamingStack':
              iconName = GamingIcon;
              break;
            case 'NotificationStack':
              iconName = NotificationIcon;
              break;
            case 'SettingStack':
              iconName = MenuIcon;
              break;
            default:
              iconName = HomeIcon;
              break;
          }
          return (
            <Animated.Image
              source={iconName}
              style={[
                {
                  ...styles.icon,
                  tintColor: color,
                },
                focused && {opacity: fadeAnim},
              ]}
            />
          );
        },
      })}>
      <Tab.Screen
        name="HomeStack"
        component={HomeScreenStack}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="WatchStack"
        component={SettingScreenStack}
        options={{
          tabBarLabel: 'Watch',
        }}
      />
      <Tab.Screen
        name="GamingStack"
        component={SettingScreenStack}
        options={{
          tabBarLabel: 'Gaming',
        }}
      />
      <Tab.Screen
        name="NotificationStack"
        component={SettingScreenStack}
        options={{
          tabBarLabel: 'Notification',
        }}
      />
      <Tab.Screen
        name="SettingStack"
        component={SettingScreenStack}
        options={{
          tabBarLabel: 'Setting',
        }}
      />
    </Tab.Navigator>
  );
}

export default function AppRouter() {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
    height: 22,
    width: 22,
  },
  barStyle: {
    backgroundColor: colors.white,
    height: 50,
  },
});
