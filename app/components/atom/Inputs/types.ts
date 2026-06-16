import { StyleProp, TextInputProps, TextStyle } from 'react-native';

import { IconKeys } from '../Icon/types';

interface ITextInput extends Omit<TextInputProps, 'defaultValue'> {
  leftIconName?: IconKeys;
  rightIconName?: IconKeys;
  hasError?: boolean;
  onPressRightIcon?: () => void;
  type?: 'BottomSheetTextInput' | 'TextInput';
  inputStyle?: StyleProp<TextStyle>;
  preEndText?: string;
  isRightIconDisabled?: boolean;
  message?: string;
  ErrorText?: string;
  hasClear?: boolean;
  onPressClear?: () => void;
  leftIconColor?: string;
  rightIconColor?: string;
}

export default ITextInput;
