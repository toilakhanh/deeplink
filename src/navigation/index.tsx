import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import * as React from 'react';
import {Image, ImageSourcePropType, View} from 'react-native';
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
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

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

export default function App() {
  // const insets = useSafeAreaInsets();
  const theme = useTheme();
  theme.colors.secondaryContainer = 'transparent';

  return (
    <NavigationContainer>
      <Tab.Navigator
        barStyle={{
          backgroundColor: colors.white,
          // marginBottom: insets.bottom,
        }}
        activeColor={colors.blue}
        inactiveColor={colors.gray}
        sceneAnimationEnabled={true}
        sceneAnimationType={'shifting'}
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({color}) => {
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
              <Image
                source={iconName}
                style={{height: 22, width: 22, tintColor: color}}
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
    </NavigationContainer>
  );
}

// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {
//   NavigationContainer,
//   NavigatorScreenParams,
// } from '@react-navigation/native';
// import * as React from 'react';
// import {useTheme} from 'react-native-paper';
// import HomeScreenStack, {HomeStackParams} from './homeStack';
// import SettingScreenStack from './settingStack';
// import TabBar from './tabBar';

// export type RootStackParams = {
//   HomeStack: NavigatorScreenParams<HomeStackParams>;
//   SettingStack: undefined;
//   WatchStack: undefined;
//   GamingStack: undefined;
//   NotificationStack: undefined;
//   DetailScreen: {
//     name: string;
//   };
// };

// const Tab = createBottomTabNavigator<RootStackParams>();

// export default function App() {
//   // const insets = useSafeAreaInsets();
//   // const isFocused = useIsFocused()
//   const theme = useTheme();
//   theme.colors.secondaryContainer = 'transparent';

//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         tabBar={props => <TabBar {...props} />}
//         screenOptions={({}) => ({
//           headerShown: false,
//         })}>
//         <Tab.Screen
//           name="HomeStack"
//           component={HomeScreenStack}
//           options={{
//             tabBarLabel: 'Home',
//           }}
//         />
//         <Tab.Screen
//           name="WatchStack"
//           component={SettingScreenStack}
//           options={{
//             tabBarLabel: 'Watch',
//           }}
//         />
//         <Tab.Screen
//           name="GamingStack"
//           component={SettingScreenStack}
//           options={{
//             tabBarLabel: 'Gaming',
//           }}
//         />
//         <Tab.Screen
//           name="NotificationStack"
//           component={SettingScreenStack}
//           options={{
//             tabBarLabel: 'Notification',
//           }}
//         />
//         <Tab.Screen
//           name="SettingStack"
//           component={SettingScreenStack}
//           options={{
//             tabBarLabel: 'Setting',
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
