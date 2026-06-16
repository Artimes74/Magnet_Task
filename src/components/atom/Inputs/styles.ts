import { StyleSheet } from "react-native";

import { Colors, gap, padding, radius, size } from "theme";

import ITextInput from "./types";

const styles = (
  editable: ITextInput["editable"],
  hasLeftIcon: boolean,
  hasError: boolean,
) => {
  return StyleSheet.create({
    Container: {
      width: "100%",
      height: size.x14,
      flexDirection: "row",
      alignItems: "center",
      borderWidth: 1,
      borderColor: hasError ? Colors.status.error : Colors.border.primary,
      borderRadius: radius.x5,
      paddingHorizontal: padding.x4,
    },
    leftIcon: {
      marginRight: gap.x2,
      alignSelf: "center",
      zIndex: -1,
    },
    hitSlop: {
      right: 8,
      left: hasLeftIcon ? size.x14 : size.x4,
      top: size.x2,
      bottom: size.x2,
      marginVertical: gap.x4,
    },
    input: {
      padding: 0,
      paddingLeft: !hasLeftIcon ? padding.x2 : 0,
      flex: 1,
      color: editable ? Colors.text.primary : Colors.text.disabled,
      marginRight: gap.x2,
    },
    rowIconContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: gap.x3,
    },
    rightIcon: { alignSelf: "center" },
  });
};

export default styles;
