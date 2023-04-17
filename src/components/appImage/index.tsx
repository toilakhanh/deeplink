import {
  Image,
  ImageResizeMode,
  ImageSourcePropType,
  ImageStyle,
  //   StyleSheet,
} from 'react-native';
import React, {memo, useEffect, useState} from 'react';
import {WIDTH} from '../../assets/styles';

type Props = {
  autoHeight?: boolean;
  height?: number;
  width?: number;
  resizeMode?: ImageResizeMode;
  source?: ImageSourcePropType;
  uri?: string;
  style?: ImageStyle;
};

const AppImage = memo((props: Props) => {
  const {height, width = WIDTH, resizeMode, uri, source, style} = props;
  const [heightAuto, setHeightAuto] = useState<number>(0);

  useEffect(() => {
    if (uri) {
      Image.getSize(uri, (widthImage, heightImage) => {
        const newHeight = (width * heightImage) / widthImage;
        setHeightAuto(newHeight);
      });
    }
  }, [uri, width]);

  return (
    <React.Fragment>
      {source ? (
        <Image
          source={source}
          resizeMode={resizeMode}
          style={{width, height, ...style}}
        />
      ) : (
        <Image
          source={{uri}}
          resizeMode={resizeMode}
          style={{width, height: heightAuto, ...style}}
        />
      )}
    </React.Fragment>
  );
});

export default AppImage;

// const styles = StyleSheet.create({});
