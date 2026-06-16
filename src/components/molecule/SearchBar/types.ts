import { StyleProp, ViewStyle } from "react-native";

export interface ISearchBar {
  StartComponent?: React.ReactNode;
  EndComponent?: React.ReactNode;
  startComponentStyle?: StyleProp<ViewStyle>;
  endComponentStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  onChangeText?: (text: string) => void;
}
