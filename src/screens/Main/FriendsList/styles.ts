import { StyleSheet } from "react-native";
import { gap, padding, radius, size } from "theme";

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: size.x3 },
  contentContainerStyle: {
    flexGrow: 1,
  },
  searchBar: { marginVertical: gap.x5 },
  SearchBarEndComponentContainer: {
    flexDirection: "row",
    borderRadius: radius.x7,
    backgroundColor: "#007AFF1A",
    justifyContent: "center",
    alignItems: "center",
    padding: padding.x3,
    gap: gap.x3,
  },
  vipBackgroundColor: {
    backgroundColor: "#007AFF",
  },
  vipText: { color: "white" },
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
  },
  textButtonTitleStyle: { paddingHorizontal: 0 },
});

export default styles;
