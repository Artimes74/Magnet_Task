import { StyleSheet } from "react-native";
import { size } from "../../../theme/primitive";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: size.x4,
    alignItems: "center",
  },
  startComponent: {
    justifyContent: "center",
    marginRight: size.x4,
    marginVertical: size.x2,
  },
  inputWrapper: {
    flex: 1,
    minWidth: 0,
  },
  endComponent: {
    marginLeft: size.x4,
    flexDirection: "row",
    alignItems: "center",
    flexShrink: 1,
  },
});

export default styles;
