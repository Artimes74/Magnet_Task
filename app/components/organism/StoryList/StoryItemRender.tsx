import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { MagnetStoryItem } from 'components/molecule';

type Props = {
  item: { id: number; name: string; avatar: string };
};

const StoryItemRender = ({ item }: Props) => {
  return <MagnetStoryItem item={item} />;
};

export default StoryItemRender;
