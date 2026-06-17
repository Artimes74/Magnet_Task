import { StyleProp, ViewStyle } from "react-native";

export interface ISkeleton {
  width: number;
  height: number;
  borderRadius?: number;
  style?: StyleProp<ViewStyle>;
}
