import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { MagnetAvatar } from 'components/atom';

type Props = {
  item: { id: number; name: string; avatar: string; isOwner?: boolean };
};

const StoryItem = ({ item }: Props) => {
  return (
    <MagnetAvatar variant="story" uri={item.avatar} isOwner={item?.isOwner} />
  );
};

export default StoryItem;
