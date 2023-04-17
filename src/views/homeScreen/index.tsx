import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {Button, Image, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {colors, padding} from 'src/assets/styles';
import {RootStackParams} from 'src/navigation';
import {title} from 'src/utils/const';
import LinearGradient from 'react-native-linear-gradient';
import {ImageGalleryIcon, MusicIcon, PlusIcon} from '../../assets';
import AppButton from '../../components/appButton';
import AppImage from '../../components/appImage';
import {styles} from './styles';
import AppText from '../../components/appText';
import ModalStatus from '../../components/modalStatus';

// type Props = NativeStackScreenProps<RootStackParams, 'HomeStack'>;

type Props = {
  showModalStatus: boolean;
  _openModal: () => void;
  _closeModal: () => void;
  _openImageGallery: () => void;
};

const sampleStory = [
  {id: 1, imageLink: 'https://example.com/image1.jpg'},
  {id: 2, imageLink: 'https://example.com/image2.jpg'},
  {id: 3, imageLink: 'https://example.com/image3.jpg'},
  {id: 4, imageLink: 'https://example.com/image4.jpg'},
  {id: 5, imageLink: 'https://example.com/image5.jpg'},
];

const URL_IMAGE =
  'https://i.pinimg.com/550x/44/08/a6/4408a6dc6522c66e387890225bd86e16.jpg';

const HomeScreen: React.FC<Props> = props => {
  const {showModalStatus, _openModal, _closeModal, _openImageGallery} = props;
  return (
    <View style={styles.container}>
      <View style={styles.viewTop}>
        <View style={styles.row}>
          <AppImage source={{uri: URL_IMAGE}} style={styles.avatar} />
          <AppButton
            title={"What's do your mind?"}
            style={styles.buttonStatus}
            textStyle={styles.textStatus}
            onPress={_openModal}
          />
        </View>
        <AppButton style={styles.buttonStatus}>
          <AppImage style={styles.imgGallery} source={ImageGalleryIcon} />
        </AppButton>
      </View>
      <View style={styles.bigLine} />
      <FlatList
        style={styles.listStory}
        data={sampleStory}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        horizontal
        ListHeaderComponent={() => {
          return (
            <View style={styles.row}>
              <AppButton style={styles.storyItem}>
                <LinearGradient
                  colors={['#4BC4A1', '#4AAADA']}
                  style={styles.storyItem}>
                  <View style={styles.viewIconMusic}>
                    <AppImage source={MusicIcon} style={styles.iconMusic} />
                  </View>
                  <AppText style={styles.textMusic}>Music</AppText>
                </LinearGradient>
              </AppButton>
              <AppButton style={styles.storyItem}>
                <AppImage
                  source={{uri: URL_IMAGE}}
                  style={styles.imgCreateStory}
                />
                <View style={styles.viewIconPlus}>
                  <AppImage source={PlusIcon} style={styles.iconPlus} />
                </View>
                <AppText style={styles.textCreateStory}>
                  {'Create\nstory'}
                </AppText>
              </AppButton>
            </View>
          );
        }}
        renderItem={({item, index}) => {
          return (
            <View style={styles.storyItem}>
              <AppText>1</AppText>
            </View>
          );
        }}
      />
      <View style={styles.bigLine} />
      {showModalStatus && <ModalStatus _closeModal={_closeModal} />}
    </View>
  );
};

export default HomeScreen;
