import type React from 'react';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';
import type { IconKeys } from 'components/atom/Icon/types';

export interface IAppBarProps {
  title?: string;
  leftIconName?: IconKeys;
  onPressLeftIcon?: () => void;
  LeftComponent?: React.ReactNode;
  RightComponent?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
}
