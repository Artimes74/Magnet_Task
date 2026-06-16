import React from "react";
import { StyleSheet } from "react-native";
import Svg, { Defs, RadialGradient, Rect, Stop } from "react-native-svg";

import type { IGradientButtonBackgroundProps } from "./types";

const GradientButtonBackground = ({
  disabled = false,
  borderRadius = 16,
}: IGradientButtonBackgroundProps) => {
  return (
    <Svg width="100%" height="100%" style={StyleSheet.absoluteFill}>
      <Defs>
        {disabled ? (
          <RadialGradient
            id="buttonGradient"
            cx="50%"
            cy="20%"
            rx="100%"
            ry="140%"
          >
            <Stop offset="0%" stopColor="#2A2B30" />
            <Stop offset="100%" stopColor="#1A1B1E" />
          </RadialGradient>
        ) : (
          <RadialGradient
            id="buttonGradient"
            cx="50%"
            cy="190%"
            rx="90%"
            ry="230%"
          >
            <Stop offset="40%" stopColor="#230F36" />
            <Stop offset="100%" stopColor="#A85CFF" />
          </RadialGradient>
        )}
      </Defs>

      <Rect
        width="100%"
        height="100%"
        rx={borderRadius}
        fill="url(#buttonGradient)"
      />
    </Svg>
  );
};

export default GradientButtonBackground;
