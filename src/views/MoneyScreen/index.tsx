import {
  Button,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Layout} from '@src/components';

const {width, height} = Dimensions.get('window');

const MoneyScreen = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);

  return (
    <Layout title="MoneyScreen">
      <View>
        <View style={{flexDirection: 'row'}}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={{
                uri: 'https://i.imgur.com/qcwE0Hq.jpg',
              }}
              style={{height: height / 2, width: width / 2}}
            />
            <CountView value={left} setValue={setLeft} />
          </View>
          <View style={{alignItems: 'center'}}>
            <Image
              source={{
                uri: 'https://i.imgur.com/07nPnRK.jpg',
              }}
              style={{height: height / 2, width: width / 2}}
            />
            <CountView value={right} setValue={setRight} />
          </View>
        </View>
        <View style={{marginTop: 30}}>
          <Text style={{alignSelf: 'center', fontSize: 30}}>{`Total: ${
            (left + right) * 30
          }K`}</Text>
        </View>
      </View>
    </Layout>
  );
};

const CountView = ({value, setValue}: any) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <TouchableOpacity
        onPress={() => setValue((prev: number) => prev - 1)}
        style={{
          height: 50,
          width: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/271/271220.png',
          }}
          style={{width: 24, height: 24}}
        />
      </TouchableOpacity>
      <Text style={{fontSize: 24}}>{value}</Text>
      <TouchableOpacity
        onPress={() => setValue((prev: number) => prev + 1)}
        style={{
          height: 50,
          width: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/271/271228.png',
          }}
          style={{width: 24, height: 24}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default MoneyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
