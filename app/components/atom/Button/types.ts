import {
  PressableProps,
  StyleProp,
  TextProps,
  TextStyle,
  ViewStyle,
} from 'react-native';

import { IconKeys } from '../Icon/types';

type TButtonType = 'Fill' | 'Outline' | 'Text' | 'Gradient';

export interface IButtonProps extends Pick<PressableProps, 'onPress'> {
  title: string;
  isLoading?: boolean;
  type?: TButtonType;
  titleStyle?: StyleProp<TextStyle>;
  rightIconName?: IconKeys;
  rightIconColor?: string;
  rightIconSize?: number;
  leftIconName?: IconKeys;
  leftIconColor?: string;
  titleProps?: TextProps;
  leftIconSize?: number;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  testID?: string;
}
