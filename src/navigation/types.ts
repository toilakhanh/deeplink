export type HomeStackParamList = {
  HomeScreen: undefined;
  DetailScreen: {id: string};
};

export type SettingStackParamList = {
  SettingScreen: undefined;
};

// export type SettingScreenProps = {
//   navigation:
// };

export const ScreenList = {
  HOME_STACK: 'HomeStack',
  SETTING_STACK: 'SettingStack',
  HOME_SCREEN: 'HomeScreen',
  DETAIL_SCREEN: 'DetailScreen',
  SETTING_SCREEN: 'SettingScreen',
};
