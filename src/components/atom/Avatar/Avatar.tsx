import React from "react";
import { Pressable, View } from "react-native";
import FastImage, { Source } from "react-native-fast-image";

import { AVATAR_SIZE, Colors } from "theme";
import DefaultAvatar from "assets/images/default-avatar.png";

import Icon from "../Icon";
import styles from "./styles";
import type { AvatarProps } from "./types";

const Avatar = ({
  uri,
  source,
  size,
  variant = "list",
  style,
  isOwner = false,
  isOnline = false,
  hasBorder = true,
}: AvatarProps) => {
  const avatarSize = size ?? AVATAR_SIZE[variant];
  const outerRadius = avatarSize * 0.32;
  const innerRadius = outerRadius - 3;

  const imageSource: Source | number =
    source ??
    ((uri
      ? {
          uri,

          priority: FastImage.priority.normal,

          cache: FastImage.cacheControl.immutable,
        }
      : DefaultAvatar) as Source);

  const avatarStyle = styles(hasBorder);

  return (
    <Pressable
      style={[
        avatarStyle.container,
        {
          width: avatarSize,
          height: avatarSize,
          borderRadius: outerRadius,
        },
      ]}
    >
      <FastImage
        source={imageSource}
        resizeMode={FastImage.resizeMode.cover}
        style={[
          avatarStyle.image,

          {
            borderRadius: innerRadius,
          },

          style as any,
        ]}
      />

      {isOwner && (
        <View
          style={[
            avatarStyle.ownerBadge,
            {
              width: avatarSize * 0.34,
              height: avatarSize * 0.34,
              borderRadius: avatarSize * 0.12,
            },
          ]}
        >
          <Icon name="plus" size={20} color={Colors.text.primary} />
        </View>
      )}

      {isOnline && (
        <View
          style={[
            avatarStyle.onlineIndicator,
            {
              top: 0,
              right: 0,
              width: avatarSize * 0.2,
              height: avatarSize * 0.2,
              borderRadius: avatarSize * 0.1,
            },
          ]}
        />
      )}
    </Pressable>
  );
};

export default Avatar;
