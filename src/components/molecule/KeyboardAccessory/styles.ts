import { StyleSheet } from "react-native";
import { Colors, gap } from "theme";

const styles = (disabled: boolean, loading: boolean) => {
  return StyleSheet.create({
    container: {
      backgroundColor: "transparent",
      zIndex: 3,
    },
    gradient: {
      minHeight: 56,
      borderRadius: 16,
      justifyContent: "center",
      alignItems: "center",
    },
    gradientTextAndIconContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: gap.x2,
    },
    title: {
      color: disabled || loading ? Colors.text.disabled : Colors.text.primary,
    },
  });
};

export default styles;
