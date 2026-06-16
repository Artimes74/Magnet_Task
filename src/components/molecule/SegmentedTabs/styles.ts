import { StyleSheet } from "react-native";
import { Colors } from "theme";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },

  tabsRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
  },

  label: {
    fontSize: 13,
    color: Colors.segmentedControl.activeLabel,
  },

  activeLabel: {
    color: Colors.text.primary,
    fontWeight: "600",
  },

  indicatorTrack: {
    width: "100%",
    height: 2,
    backgroundColor: Colors.indicator.track,
    overflow: "hidden",
  },

  indicator: {
    height: 2,
    backgroundColor: Colors.button.primaryPressed,
  },
});

export default styles;
