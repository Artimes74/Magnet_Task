import React from "react";
import LinearGradient from "react-native-linear-gradient";
import ShimmerPlaceHolder from "react-native-shimmer-placeholder";
import { ISkeleton } from "./types";

const SkeletonBox = ({ width, height, borderRadius = 8, style }: ISkeleton) => {
  return (
    <ShimmerPlaceHolder
      LinearGradient={LinearGradient}
      width={width}
      height={height}
      shimmerColors={["#1A1B1E", "#393939", "#1A1B1E"]}
      style={[{ borderRadius }, style]}
    />
  );
};

export default SkeletonBox;
