import React from 'react';
import type {
  GestureResponderEvent,
  StyleProp,
  TextProps,
  TextStyle,
  ViewStyle,
} from 'react-native';

export interface ListItemProps {
  itemKey?: React.Key;
  title: string;
  titleStyle?: StyleProp<TextStyle>;
  titleNumberOfLines?: number;
  titleEllipsizeMode?: TextProps['ellipsizeMode'];
  StartComponent?: React.ReactNode;
  EndComponent?: React.ReactNode;
  startComponentStyle?: StyleProp<ViewStyle>;
  endComponentStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  underlayColor?: string;
  onPress?: (event: GestureResponderEvent) => void;
  onLongPress?: (event: GestureResponderEvent) => void;
  hasMoreAction?: boolean;
  onPressMore?: () => void;
  hasIconInTitle?: boolean;
}
