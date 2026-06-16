import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const dimensions = {
  screenWidth: width,
  screenHeight: height,
  isSmallDevice: width < 375,
  isTablet: width >= 768,
} as const;
