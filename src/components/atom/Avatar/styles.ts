import { StyleSheet } from "react-native";

import { Colors, padding, radius } from "theme";

const styles = (hasBorder: boolean) => {
  return StyleSheet.create({
    container: {
      backgroundColor: "transparent",
      borderWidth: hasBorder ? 1 : 0,
      borderColor: Colors.button.primaryLight,
      padding: padding.x1 / 1.8,
    },
    image: {
      flex: 1,
      width: "100%",
      height: "100%",
      backgroundColor: "black",
    },
    ownerBadge: {
      position: "absolute",
      bottom: 0,
      right: 0,
      width: 30,
      height: 30,
      borderRadius: radius.x3,
      borderWidth: 2,
      borderColor: Colors.text.primary,
      backgroundColor: Colors.text.disabled,
      justifyContent: "center",
      alignItems: "center",
    },
    fallback: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: Colors.background.elevated,
    },
    onlineIndicator: {
      position: "absolute",
      backgroundColor: Colors.status.success,
      borderWidth: 1.5,
      borderColor: Colors.background.tertiary,
    },
  });
};

export default styles;
