import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { padding, size } from 'theme';
import StoryItemRender from './StoryItemRender';
import OwnerStoryItem from './OwnerStoryItem';

type Props = {
  data: { id: number; name: string; avatar: string }[];
};

const StoryList = ({ data }: Props) => {
  return (
    <View>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{
          gap: size.x2,
          paddingLeft: padding.x3,
          paddingRight: padding.x3,
        }}
        ListHeaderComponent={<OwnerStoryItem />}
        renderItem={StoryItemRender}
      />
    </View>
  );
};

export default StoryList;

const styles = StyleSheet.create({});
