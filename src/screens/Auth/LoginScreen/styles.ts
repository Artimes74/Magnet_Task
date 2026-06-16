import { StyleSheet } from "react-native";
import { dimensions, size } from "theme";

const styles = StyleSheet.create({
  container: { flex: 1 },
  contentContainerStyle: {
    flexGrow: 1,
    paddingTop: dimensions.screenWidth / 3.5,
  },
  wrapper: {
    flex: 1,
    flexGrow: 1,
    justifyContent: "space-between",
  },
  formContainer: {
    gap: size.x4,
  },
  textButtonStyle: {
    alignSelf: "flex-end",
    marginLeft: "auto",
  },
  actionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  errorTitleStyle: { color: "#F24822" },
  textButtonTitleStyle: { paddingHorizontal: 0 },
});

export default styles;
