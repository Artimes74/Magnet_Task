import React from "react";
import { FlatList, View } from "react-native";

import { padding, size } from "theme";

import OwnerStoryItem from "./OwnerStoryItem";
import StoryItemRender from "./StoryItemRender";
import StorySkeleton from "./StorySkeleton";
import { IStoryList } from "./types";

const StoryList = ({ data, isLoading }: IStoryList) => {
  return (
    <View>
      {isLoading ? (
        <StorySkeleton />
      ) : (
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
      )}
    </View>
  );
};

export default StoryList;
