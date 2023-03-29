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
import MenuScreenStack from './menuStack';
import {useTheme} from 'react-native-paper';
import {colors} from '../assets/styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {LoginScreen} from 'src/screen';

export type RootStackParams = {
  Drawer: undefined;
  HomeStack:
    | NavigatorScreenParams<HomeStackParams>
    | {isParentScreen: boolean; title: string};
  MenuStack: undefined;
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
            case 'MenuStack':
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
        component={MenuScreenStack}
        options={{
          tabBarLabel: 'Watch',
        }}
      />
      <Tab.Screen
        name="GamingStack"
        component={MenuScreenStack}
        options={{
          tabBarLabel: 'Gaming',
        }}
      />
      <Tab.Screen
        name="NotificationStack"
        component={MenuScreenStack}
        options={{
          tabBarLabel: 'Notification',
        }}
      />
      <Tab.Screen
        name="MenuStack"
        component={MenuScreenStack}
        options={{
          tabBarLabel: 'Menu',
        }}
      />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

export default function AppRouter() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Drawer.Screen name="LoginScreen" component={LoginScreen} />
        <Drawer.Screen name="Tab" component={App} />
      </Drawer.Navigator>
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
