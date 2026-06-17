import React, { memo, useCallback } from "react";
import { FlatList, View } from "react-native";
import PagerView from "react-native-pager-view";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { withTiming } from "react-native-reanimated";
import { closeOpenedSwipeable } from "../SwipeableListItem/SwipeableListItem";

import { gap, padding } from "theme";

import type { PagerTabsProps } from "./types";
import styles from "./styles";

const PagerTabs = <T extends string, ItemT>({
  tabs,
  renderItem,
  keyExtractor,
  onPageChange,
  progress,
  pagerRef,
  skeletonRender,
  isLoading = false,
}: PagerTabsProps<T, ItemT>) => {
  const insets = useSafeAreaInsets();

  const handlePageSelected = useCallback(
    (event: any) => {
      const index = event.nativeEvent.position;

      onPageChange(index);

      progress.value = withTiming(index, {
        duration: 160,
      });
    },
    [onPageChange, progress],
  );

  return (
    <PagerView
      ref={pagerRef}
      style={styles.pager}
      initialPage={0}
      scrollEnabled={false}
      onPageSelected={handlePageSelected}
    >
      {isLoading
        ? skeletonRender
        : tabs.map((tab, index) => (
            <View key={`${tab.value}-${index}`} style={styles.page}>
              <FlatList
                data={tab.data}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                bounces={false}
                scrollEnabled={!isLoading}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                  paddingTop: padding.x2,
                  paddingBottom: Math.max(insets.bottom + 42, 36),
                  gap: gap.x4,
                }}
                initialNumToRender={8}
                maxToRenderPerBatch={8}
                windowSize={10}
                removeClippedSubviews={false}
                onScrollBeginDrag={closeOpenedSwipeable}
                onMomentumScrollBegin={closeOpenedSwipeable}
              />
            </View>
          ))}
    </PagerView>
  );
};

export default memo(PagerTabs) as typeof PagerTabs;
