import {StyleSheet} from 'react-native';
import {colors, fontSize, margin, padding} from '../../assets/styles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  viewTop: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  avatar: {
    height: 40,
    width: 40,
    borderWidth: 0.5,
    borderColor: colors.lightGray,
    borderRadius: 50,
  },
  row: {
    flexDirection: 'row',
  },
  textStatus: {
    color: colors.black,
    fontWeight: 'normal',
    fontSize: 16,
  },
  imgGallery: {
    height: 26,
    width: 26,
    tintColor: colors.green,
  },
  bigLine: {
    width: '100%',
    height: 5,
    backgroundColor: colors.lightGray,
  },
  storyItem: {
    height: 200,
    width: 100,
    backgroundColor: colors.white,
    borderRadius: 16,
    margin: margin.m4,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: colors.lightGray,
  },
  buttonStatus: {
    backgroundColor: colors.white,
    paddingHorizontal: padding.p12,
    borderRadius: padding.p8,
  },
  viewIconMusic: {
    backgroundColor: colors.white,
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconMusic: {width: 20, height: 20},
  textMusic: {
    fontSize: fontSize.f16,
    color: colors.white,
    fontWeight: 'bold',
    marginTop: margin.m8,
  },
  imgCreateStory: {
    width: '100%',
    height: 100,
  },
  viewIconPlus: {
    backgroundColor: colors.blue,
    width: 30,
    height: 30,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconPlus: {
    height: 18,
    width: 18,
    tintColor: colors.white,
  },
  textCreateStory: {
    textAlign: 'center',
    fontSize: fontSize.f16,
    fontWeight: '600',
    marginTop: margin.m4,
  },
  listStory: {flexGrow: 0, padding: padding.p8},
});
