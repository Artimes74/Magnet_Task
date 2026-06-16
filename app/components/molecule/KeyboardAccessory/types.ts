import { StyleProp, ViewStyle } from 'react-native';
import { KeyboardAccessoryProps } from 'react-native-keyboard-accessory';

import { IButtonProps } from '../../atom/Button/types';

export interface IKeyboardAccessoryProps
  extends Omit<
    IButtonProps,
    'title' | 'onPress' | 'type' | 'loading' | 'disabled'
  > {
  title: string;
  isLoading?: boolean;
  disabled?: boolean;
  onPress?: () => void;
  type?: IButtonProps['type'];
  containerStyle?: StyleProp<ViewStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  accessoryProps?: KeyboardAccessoryProps;
  testID?: string;
}

export interface IGradientButtonBackgroundProps {
  disabled?: boolean;
  borderRadius?: number;
}
