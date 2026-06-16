import { StyleProp, ViewStyle } from "react-native";
import { KeyboardAccessoryProps } from "react-native-keyboard-accessory";

import type { IButtonProps } from "components";

export interface IKeyboardAccessoryProps
  extends Omit<
    IButtonProps,
    "title" | "onPress" | "type" | "loading" | "disabled"
  > {
  title: string;
  isLoading?: boolean;
  disabled?: boolean;
  onPress?: () => void;
  type?: IButtonProps["type"];
  containerStyle?: StyleProp<ViewStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  accessoryProps?: KeyboardAccessoryProps;
  testID?: string;
}

export interface IGradientButtonBackgroundProps {
  disabled?: boolean;
  borderRadius?: number;
}
