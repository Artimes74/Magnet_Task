import { StyleSheet } from "react-native";
import { AVATAR_SIZE, Colors, gap, padding, radius, size } from "theme";

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: size.x3 },
  contentContainerStyle: {
    flexGrow: 1,
  },
  searchBar: { marginVertical: gap.x5 },
  SearchBarEndComponentContainer: {
    flexDirection: "row",
    borderRadius: radius.x7,
    backgroundColor: Colors.chip.text,
    justifyContent: "center",
    alignItems: "center",
    padding: padding.x3,
    gap: gap.x3,
  },
  vipBackgroundColor: {
    backgroundColor: Colors.chip.background,
  },
  vipText: { color: Colors.text.primary },
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
  startComponentStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: gap.x3,
  },
  blockSpace: { width: size.x5, height: size.x5 },
  endComponentRequestTimeStyle: {
    color: Colors.text.disabled,
    textAlign: "right",
    marginBottom: gap.x1,
    marginRight: gap.x1,
  },
  endComponentRequestButtonsContainerStyle: {
    flexDirection: "row",
    gap: gap.x1,
  },
  endComponentRequestDeclineButton: {
    borderWidth: 1,
    borderColor: Colors.button.primaryLight,
  },
  endComponentRequestDeclineButtonText: {
    color: Colors.text.primary,
    paddingVertical: padding.x1,
    paddingHorizontal: padding.x3,
  },
  endComponentRequestAcceptButton: {
    backgroundColor: Colors.button.primaryLight,
  },
  endComponentRequestAcceptButtonText: {
    color: Colors.background.primary,
    paddingVertical: padding.x1,
    paddingHorizontal: padding.x3,
  },
  endComponentPendingContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: gap.x1,
    marginBottom: gap.x1,
  },
  endComponentPendingBulletPoint: {
    top: AVATAR_SIZE["list"] * 0,
    right: AVATAR_SIZE["list"] * 0,
    width: AVATAR_SIZE["list"] * 0.1,
    height: AVATAR_SIZE["list"] * 0.1,
    borderRadius: AVATAR_SIZE["list"] * 0.1,
    backgroundColor: Colors.button.primaryLight,
  },
  endComponentPendingTimeText: {
    color: Colors.text.disabled,
    marginRight: gap.x1,
  },
  endComponentPendingCancelButton: {
    borderWidth: 1,
    borderColor: Colors.button.primaryLight,
  },
  endComponentPendingCancelButtonText: {
    color: Colors.text.primary,
    paddingVertical: padding.x1,
    paddingHorizontal: padding.x3,
  },
});

export default styles;
