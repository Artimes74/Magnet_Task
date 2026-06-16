import { StyleSheet } from "react-native";
import { padding } from "theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  padding: {
    paddingHorizontal: padding.x4,
  },
  innerContainer: {
    width: "100%",
    paddingBottom: padding.x4,
    backgroundColor: "transparent",
  },
  loadingStyle: {
    ...StyleSheet.absoluteFill,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
