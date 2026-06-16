import React from "react";
import { Pressable, Text, View } from "react-native";

import { MagnetIcon } from "components";

import styles from "./styles";
import type { IAppBarProps } from "./types";

const AppBar = ({
  title,
  leftIconName = "back-button",
  onPressLeftIcon,
  LeftComponent,
  RightComponent,
  style,
  titleStyle,
}: IAppBarProps) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.side}>
        {LeftComponent ?? (
          <Pressable onPress={onPressLeftIcon} hitSlop={12}>
            <MagnetIcon name={leftIconName} size={24} color="#FFFFFF" />
          </Pressable>
        )}
      </View>

      <Text numberOfLines={1} style={[styles.title, titleStyle]}>
        {title}
      </Text>

      <View style={[styles.side, styles.rightSide]}>{RightComponent}</View>
    </View>
  );
};

export default AppBar;
