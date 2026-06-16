import { StyleProp, TextStyle } from 'react-native';

import { iconNames } from './iconNames';

export type IconKeys = (typeof iconNames)[number];

export interface IIconProps {
  name: IconKeys;
  size?: number;
  disabled?: boolean;
  color?: string;
  style?: StyleProp<TextStyle>;
  onPress?: () => void;
}
