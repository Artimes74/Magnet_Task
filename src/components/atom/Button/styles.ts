import { StyleSheet } from "react-native";

import { Colors, padding, radius } from "theme";

import { IButtonProps } from "./types";

const styles = (
  type: IButtonProps["type"],
  disabled: boolean,
  style: IButtonProps["style"],
) => {
  return StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      paddingHorizontal: type === "Text" ? 0 : padding.x6,
      paddingVertical: type === "Text" ? 0 : padding.x5,
      backgroundColor:
        type === "Fill"
          ? disabled
            ? Colors.background.elevated
            : Colors.button.primary
          : "transparent",
      borderWidth: type === "Outline" ? 1 : 0,
      borderColor:
        type === "Outline"
          ? disabled
            ? Colors.background.elevated
            : Colors.button.primary
          : "transparent",
      ...(style as object),
      borderRadius: radius.x5,
    },
    content: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      width: type === "Text" ? "auto" : "100%",
    },
    title: {
      paddingHorizontal: 8,
      textAlign: "center",
      color: disabled
        ? Colors.text.disabled
        : type === "Fill"
        ? Colors.text.primary
        : Colors.button.primary,
    },
  });
};

export default styles;
