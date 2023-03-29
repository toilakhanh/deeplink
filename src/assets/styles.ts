import {Dimensions} from 'react-native';

const colors = {
  darkBlue: '#0d65d9',
  blue: '#1877F2',
  lightBlue: '#e7f1fe',
  white: '#FFF',
  gray: '#8E8E8E',
  lightGray: 'lightgrey',
  black: '#000',
  red: '#FF0000',
  green: '#42B72A',
  orange: '#FF7F00',
  yellow: '#FFD500',
  purple: '#B620E0',
};

const padding = {
  p2: 2,
  p4: 4,
  p8: 8,
  p12: 12,
  p16: 16,
  p24: 24,
  p32: 32,
};

const margin = {
  m2: 2,
  m4: 4,
  m8: 8,
  m12: 12,
  m16: 16,
  m24: 24,
  m32: 32,
};

const fontSize = {
  f12: 12,
  f14: 14,
  f16: 16,
  f18: 18,
  f20: 20,
  f24: 24,
  f32: 32,
};

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export {colors, WIDTH, HEIGHT, padding, margin, fontSize};
