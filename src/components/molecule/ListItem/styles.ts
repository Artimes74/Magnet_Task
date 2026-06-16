import { StyleSheet } from "react-native";
import { Colors, padding, radius, size } from "theme";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: radius.x4,
    overflow: "hidden",
    paddingHorizontal: padding.x4,
  },

  contentContainer: {
    minHeight: size.x14,
    flexDirection: "row",
    alignItems: "center",
  },

  startComponent: {
    marginRight: size.x3,
    justifyContent: "center",
    alignItems: "center",
  },

  textContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    minWidth: 0,
  },

  title: {
    color: Colors.text.primary,
    fontSize: 15,
    fontWeight: "500",
  },

  endComponents: {
    marginLeft: size.x3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  underlay: {
    color: Colors.overlay.light,
  },
});

export default styles;
