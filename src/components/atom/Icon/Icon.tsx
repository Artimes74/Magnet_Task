import React from "react";
import { Pressable } from "react-native";
import createIconSetFromIcoMoon from "react-native-vector-icons/lib/create-icon-set-from-icomoon";

import { Colors } from "theme";

import icoMoonConfig from "./selection.json";
import { IIconProps } from "./types";

const BaseIcon = createIconSetFromIcoMoon(
  icoMoonConfig,
  "MagnetIcon",
  "MagnetIcon.ttf",
);

const Icon = ({
  name,
  size = 24,
  disabled = false,
  style,
  onPress,
  color = Colors.text.disabled,
}: IIconProps) => {
  const iconElement = (
    <BaseIcon name={name} size={size} color={color} style={style} />
  );

  if (onPress) {
    return (
      <Pressable disabled={disabled} onPress={onPress}>
        {iconElement}
      </Pressable>
    );
  }

  return iconElement;
};

export default Icon;
