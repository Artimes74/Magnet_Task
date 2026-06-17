import React, { ReactNode } from "react";
import { View } from "react-native";

import { MagnetSkeleton } from "components";
import { AVATAR_SIZE, size } from "theme";

import styles from "./styles";

const FriendSkeleton = () => {
  function item(_: any, index: number): ReactNode {
    return (
      <View
        key={index}
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: size.x3,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <MagnetSkeleton
            width={AVATAR_SIZE.list + size.x1}
            height={AVATAR_SIZE.list + size.x1}
            borderRadius={(AVATAR_SIZE.list + size.x1) * 0.32 - 3}
            style={{
              marginLeft: size.x2,
              marginBottom: size.x2,
            }}
          />

          <MagnetSkeleton
            width={AVATAR_SIZE.list * 2.5}
            height={size.x4}
            borderRadius={AVATAR_SIZE.list * 0.32 - 3}
            style={{
              marginLeft: size.x5,
              alignSelf: "center",
            }}
          />
        </View>

        <MagnetSkeleton
          width={size.x10}
          height={size.x10}
          borderRadius={size.x10 / 2}
          style={{
            marginRight: size.x5,
            marginBottom: size.x2,
          }}
        />
      </View>
    );
  }

  return <View style={styles.container}>{Array(10).fill(null).map(item)}</View>;
};

export default FriendSkeleton;
