export type HomeStackParamList = {
  HomeScreen: undefined;
  DetailScreen: {id: string};
};

export type MenuStackParamList = {
  MenuScreen: undefined;
};

// export type MenuScreenProps = {
//   navigation:
// };

export const ScreenList = {
  HOME_STACK: 'HomeStack',
  SETTING_STACK: 'MenuStack',
  HOME_SCREEN: 'HomeScreen',
  DETAIL_SCREEN: 'DetailScreen',
  SETTING_SCREEN: 'MenuScreen',
};
