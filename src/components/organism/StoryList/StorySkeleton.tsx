import React, { ReactNode } from "react";
import { View } from "react-native";

import { MagnetSkeleton } from "components";
import { AVATAR_SIZE, size } from "theme";

import styles from "./styles";

const StorySkeleton = () => {
  function item(_: any, index: number): ReactNode {
    return (
      <MagnetSkeleton
        key={index}
        width={AVATAR_SIZE.story}
        height={AVATAR_SIZE.story}
        borderRadius={AVATAR_SIZE.story * 0.32 - 3}
        style={{
          marginRight: size.x3,
          marginLeft: index === 0 ? size.x3 : 0,
        }}
      />
    );
  }

  return (
    <View style={styles.skeletonContainer}>
      {Array(10).fill(null).map(item)}
    </View>
  );
};

export default StorySkeleton;
