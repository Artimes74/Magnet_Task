import React from "react";
import { View, type ViewStyle } from "react-native";
import LinearGradient from "react-native-linear-gradient";

import { Colors } from "theme";

import { tabGradientShellStyles } from "./styles";

const BORDER_COLORS = ["#FFFFFF0D", Colors.background.tertiary];

type Props = {
  children: React.ReactNode;
  variant?: "group" | "center";
  height?: number;
  size?: number;
};

const TabGradientShell = ({
  children,
  variant = "group",
  height = 58,
  size = 72,
}: Props) => {
  const isCenter = variant === "center";

  const shellStyle: ViewStyle[] = isCenter
    ? [
        tabGradientShellStyles.centerShell,
        {
          width: size,
          height: size,
          borderRadius: size * 0.28,
        },
      ]
    : [
        tabGradientShellStyles.groupShell,
        {
          height,
          borderRadius: height * 0.28,
        },
      ];

  const backgroundStyle: ViewStyle[] = isCenter
    ? [
        tabGradientShellStyles.centerBackground,
        {
          borderRadius: size * 0.28,
        },
      ]
    : [
        tabGradientShellStyles.groupBackground,
        {
          borderRadius: height * 0.28,
        },
      ];

  const gradientTopStyle: ViewStyle[] = isCenter
    ? [
        tabGradientShellStyles.gradientLayer,
        {
          width: size,
          height: size,
          borderRadius: size * 0.32,
          top: -1.5,
          left: -2.3,
        },
      ]
    : [
        tabGradientShellStyles.gradientLayer,
        {
          height,
          width: "100%",
          borderRadius: height * 0.32,
          top: -1.5,
          left: -2.3,
        } as ViewStyle,
      ];

  const gradientBottomStyle: ViewStyle[] = isCenter
    ? [
        tabGradientShellStyles.gradientLayer,
        {
          width: size,
          height: size,
          borderRadius: size * 0.32,
          top: 1.5,
          left: 2.3,
        },
      ]
    : [
        tabGradientShellStyles.gradientLayer,
        {
          height,
          width: "100%",
          borderRadius: height * 0.32,
          top: 1.5,
          left: 2.3,
        } as ViewStyle,
      ];

  return (
    <View style={shellStyle}>
      <LinearGradient
        colors={BORDER_COLORS}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={gradientTopStyle}
      />

      <LinearGradient
        colors={BORDER_COLORS}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={gradientBottomStyle}
      />

      <View style={backgroundStyle} />

      {children}
    </View>
  );
};

export default TabGradientShell;
