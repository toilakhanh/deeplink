/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef} from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Animated,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  GamingIcon,
  HomeIcon,
  MenuIcon,
  NotificationIcon,
  WatchIcon,
} from '../assets';
import {colors, WIDTH} from '../assets/styles';

function TabBar({state, descriptors, navigation}: BottomTabBarProps) {
  const leftPosition = useRef(new Animated.Value(0)).current;
  const widthItem = WIDTH / state.routes.length;

  const _slideIndicator = (index: number) => {
    const left = widthItem * index;
    Animated.timing(leftPosition, {
      toValue: left,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <Animated.View
        style={{
          ...styles.indicator,
          width: widthItem,
          left: leftPosition,
        }}
      />
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
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
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
            _slideIndicator(index);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index.toString()}
            activeOpacity={0.7}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.button}>
            <Image
              source={iconName}
              style={{
                ...styles.image,
                tintColor: isFocused ? colors.blue : colors.gray,
              }}
            />
            <Text style={{color: isFocused ? colors.blue : colors.gray}}>
              {label.toString()}
            </Text>
          </TouchableOpacity>
        );
      })}
      <SafeAreaView />
    </View>
  );
}

export default TabBar;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
  },
  image: {height: 22, width: 22, marginBottom: 6},
  indicator: {
    backgroundColor: '#1877F2',
    height: 2,
    position: 'absolute',
    top: 0,
  },
});
// import React, { useRef, useEffect } from 'react';
// import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
// import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
// import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

// function TabBarIndicator({ state, descriptors, navigation }: BottomTabBarProps) {
//   const focusedRouteName = getFocusedRouteNameFromRoute(state.route);
//   const position = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     Animated.spring(position, {
//       toValue: state.index,
//       useNativeDriver: true
//     }).start();
//   }, [position, state.index]);

//   return (
//     <View style={styles.container}>
//       {state.routes.map((route, index) => {
//         const { options } = descriptors[route.key];
//         const label =
//           options.tabBarLabel !== undefined
//             ? options.tabBarLabel
//             : options.title !== undefined
//             ? options.title
//             : route.name;

//         const isFocused = focusedRouteName === route.name;

//         const onPress = () => {
//           const event = navigation.emit({
//             type: 'tabPress',
//             target: route.key,
//             canPreventDefault: true,
//           });

//           if (!isFocused && !event.defaultPrevented) {
//             // The `merge: true` option makes sure that the params inside the tab screen are preserved
//             navigation.navigate({ name: route.name, merge: true });
//           }
//         };

//         const onLongPress = () => {
//           navigation.emit({
//             type: 'tabLongPress',
//             target: route.key,
//           });
//         };

//         const translateX = position.interpolate({
//           inputRange: [index - 1, index, index + 1],
//           outputRange: [-50, 0, 50]
//         });

//         return (
//           <TouchableOpacity
//             key={index.toString()}
//             accessibilityRole="button"
//             accessibilityState={isFocused ? { selected: true } : {}}
//             accessibilityLabel={options.tabBarAccessibilityLabel}
//             testID={options.tabBarTestID}
//             onPress={onPress}
//             onLongPress={onLongPress}
//             style={[styles.tabButton, isFocused && styles.tabButtonSelected]}>
//             <Text style={styles.tabButtonText}>{label.toString()}</Text>
//           </TouchableOpacity>
//         );
//       })}
//       <Animated.View style={[styles.indicator, { transform: [{ translateX }] }]} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     backgroundColor: '#fff',
//     borderTopWidth: 1,
//     borderTopColor: '#ccc'
//   },
//   tabButton: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 10
//   },
//   tabButtonSelected: {
//     borderBottomWidth: 2,
//     borderBottomColor: '#007AFF'
//   },
//   tabButtonText: {
//     fontSize: 12,
//     color: '#000'
//   },
//   indicator: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     height: 2,
//     backgroundColor: '#007AFF'
//   }
// });

// export default TabBarIndicator;
