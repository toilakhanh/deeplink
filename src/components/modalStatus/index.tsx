import React, {useRef, useState, useEffect} from 'react';
import {
  Animated,
  GestureResponderEvent,
  LayoutChangeEvent,
  Modal,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors, HEIGHT, WIDTH} from '../../assets/styles';
import {usePrevious} from '../../hooks';
import AppButton from '../appButton';
import AppImage from '../appImage';
import {Shadow} from '../shadowView';

type Props = {
  _closeModal: () => void;
};

// type pointerEvents  'box-none' | 'none' | 'box-only' | 'auto' | undefined;

const ELEMENT = [
  {
    id: 1,
    title: 'Photo/video',
    icon: 'https://cdn-icons-png.flaticon.com/512/3342/3342176.png',
    color: '#46BB60',
  },
  {
    id: 2,
    title: 'Tag people',
    icon: 'https://cdn-icons-png.flaticon.com/512/3128/3128534.png',
    color: '#1876F4',
  },
  {
    id: 3,
    title: 'Feeling/activity',
    icon: 'https://cdn-icons-png.flaticon.com/512/1933/1933691.png',
    color: '#F9B828',
  },
  {
    id: 4,
    title: 'Check in',
    icon: 'https://cdn-icons-png.flaticon.com/512/3177/3177361.png',
    color: '#F5523F',
  },
  {
    id: 5,
    title: 'Live video',
    icon: 'https://cdn-icons-png.flaticon.com/512/8888/8888139.png',
    color: '#ED2B4E',
  },
  {
    id: 6,
    title: 'Background color',
    icon: 'https://cdn-icons-png.flaticon.com/512/7911/7911015.png',
    color: '#48D0BA',
  },
  {
    id: 7,
    title: 'Camera',
    icon: 'https://cdn-icons-png.flaticon.com/512/45/45010.png',
    color: '#4496FF',
  },
  {
    id: 8,
    title: 'GIF',
    icon: 'https://cdn-icons-png.flaticon.com/512/739/739221.png',
    color: '#2BBAA6',
  },
  {
    id: 9,
    title: 'Tag event',
    icon: 'https://cdn-icons-png.flaticon.com/512/2278/2278049.png',
    color: '#F7254C',
  },
];

const HEIGHT_SLIDER = 30;
const SLIDER_SPACE = 30;
const defaultY = HEIGHT / 2;
const MIN_Y = 150;
const ANIMATION_TIME = 200;
const HEIGHT_BOTTOM_VIEW = 50;
let gap = 0;
let positionStart = 0;

const ModalStatus: React.FC<Props> = ({_closeModal}) => {
  const yPosition = useRef(new Animated.Value(defaultY)).current;
  const [position, setPosition] = useState(0);
  const [opacityBlur, setOpacityBlur] = useState(0);
  const [opacitySlideView, setOpacitySlideView] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(2);
  const [currentY, setCurrentY] = useState(defaultY);
  const prePosition = usePrevious(position) || 0;
  const swipeUp = prePosition > position;
  const insets = useSafeAreaInsets();
  const HEIGHT_BOTTOM = HEIGHT_BOTTOM_VIEW + insets.bottom;
  const MAX_Y = HEIGHT - HEIGHT_BOTTOM;
  const [enableScroll, setEnableScroll] = useState<boolean>(false);

  useEffect(() => {
    const resetData = () => {
      setCurrentY(defaultY);
      gap = 0;
      positionStart = 0;
    };
    resetData();
  }, []);

  const _setPosition = (p: number): void => {
    Animated.timing(yPosition, {
      duration: ANIMATION_TIME,
      toValue: p,
      useNativeDriver: false,
    }).start();
    setTimeout(() => {
      setCurrentY(p);
    }, ANIMATION_TIME);
  };

  const _handleAnimation = (e: GestureResponderEvent): void => {
    if (!enableScroll) {
      return;
    }
    const {pageY} = e.nativeEvent;
    setEnableScroll(false);
    const gapY = pageY - positionStart;
    const nextPosition =
      gapY < -(SLIDER_SPACE * 5)
        ? 1
        : gapY > SLIDER_SPACE * 5
        ? 3
        : swipeUp && currentPosition > 1 && gapY < -SLIDER_SPACE
        ? currentPosition - 1
        : !swipeUp && currentPosition < 3 && gapY > SLIDER_SPACE
        ? currentPosition + 1
        : currentPosition;
    setCurrentPosition(nextPosition);
    _setPosition(
      nextPosition === 1 ? MIN_Y : nextPosition === 3 ? MAX_Y : defaultY
    );
  };

  const _handleOpacity = (e: LayoutChangeEvent) => {
    const {y: layoutY} = e.nativeEvent.layout;
    const diffY = layoutY - MIN_Y + 2;
    const percentOpacityView = 1 / (MAX_Y - defaultY);
    const opacityValue =
      layoutY >= defaultY ? 0 : layoutY <= MIN_Y ? 0.5 : 1 / diffY;
    const opacityView = percentOpacityView * (layoutY - defaultY);
    setOpacitySlideView(1 - opacityView);
    setOpacityBlur(opacityValue);
    setPosition(layoutY);
  };

  const _showUpModal = () => {
    _setPosition(defaultY);
    setCurrentPosition(2);
    setCurrentY(defaultY);
  };

  return (
    <Modal animationType="slide" visible={true}>
      <View
        onTouchEnd={_handleAnimation}
        onTouchMove={e => {
          const pageY = e.nativeEvent.pageY;
          const coefficient =
            ((pageY - currentY - gap) *
              (1 - Math.abs(currentY - pageY) / 1000)) /
            1.5;
          if (enableScroll) {
            yPosition.setValue(currentY + coefficient);
          }
        }}
        onTouchStart={e => {
          const pageY = e.nativeEvent.pageY;
          positionStart = pageY;
          setEnableScroll(true);
          gap = pageY - currentY;
        }}
        style={{...styles.centeredView, paddingTop: insets.top}}>
        <View>
          <AppButton
            style={[styles.button, styles.buttonClose]}
            onPress={_closeModal}>
            <Text style={styles.textStyle}>Hide Modal</Text>
          </AppButton>
        </View>
        {currentPosition === 1 && (
          <Animated.View
            style={{
              ...styles.blurView,
              backgroundColor: `rgba(0,0,0,${opacityBlur})`,
            }}
          />
        )}
        <Animated.View
          onLayout={_handleOpacity}
          style={{
            ...styles.modalView,
            top: yPosition,
          }}>
          <Shadow style={{...styles.modalView}}>
            <View style={{opacity: opacitySlideView}}>
              <View style={styles.sliderView}>
                <View style={styles.scrollLine} />
              </View>
              {ELEMENT.map(item => {
                return (
                  <AppButton key={item.id} style={styles.itemAppButton}>
                    <View style={{width: 24, margin: 12}}>
                      <AppImage
                        uri={item.icon}
                        autoHeight
                        width={22}
                        style={{tintColor: item.color}}
                      />
                    </View>
                    <Text style={{fontSize: 16}}> {item?.title}</Text>
                  </AppButton>
                );
              })}
            </View>
          </Shadow>
        </Animated.View>
      </View>
      {currentY === MAX_Y && (
        <Animated.View
          style={{
            ...styles.bottomView,
            height: HEIGHT_BOTTOM,
          }}>
          <Shadow
            style={{
              ...styles.bottomViewShadow,
              height: HEIGHT_BOTTOM,
            }}>
            <View style={styles.sliderView}>
              <AppButton
                title={'click me!!!'}
                onPress={() => {
                  _showUpModal();
                }}
              />
            </View>
          </Shadow>
        </Animated.View>
      )}
    </Modal>
  );
};

export default ModalStatus;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: colors.white,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalView: {
    height: 800,
    width: WIDTH,
    position: 'absolute',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: colors.white,
  },
  scrollLine: {
    height: 6,
    width: 50,
    backgroundColor: colors.lightGray,
    borderRadius: 10,
  },
  itemAppButton: {
    width: '100%',
    height: 50,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  sliderView: {
    height: HEIGHT_SLIDER,
    alignItems: 'center',
    padding: 6,
  },
  blurView: {
    flex: 1,
    height: HEIGHT,
    width: WIDTH,
    position: 'absolute',
  },
  bottomView: {
    position: 'absolute',
    width: '100%',
    backgroundColor: colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    bottom: 0,
  },
  bottomViewShadow: {
    width: '100%',
    backgroundColor: colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
});
