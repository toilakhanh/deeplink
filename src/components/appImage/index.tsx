import {
  Image,
  ImageResizeMode,
  ImageSourcePropType,
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
};

const AppImage = memo((props: Props) => {
  const {height, width = WIDTH, resizeMode, uri, source} = props;
  const [heightAuto, setHeightAuto] = useState<number>(0);

  useEffect(() => {
    if (uri) {
      Image.getSize(uri, (widthImage, heightImage) => {
        console.log(width, heightImage, widthImage);
        const newHeight = (width * heightImage) / widthImage;
        console.log(newHeight);
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
          style={{width, height}}
        />
      ) : (
        <Image
          source={{uri}}
          resizeMode={resizeMode}
          style={{width, height: heightAuto}}
        />
      )}
    </React.Fragment>
  );
});

export default AppImage;

// const styles = StyleSheet.create({});
