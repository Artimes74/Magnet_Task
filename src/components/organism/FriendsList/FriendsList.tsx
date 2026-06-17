import React, { memo, useCallback, useMemo, useRef, useState } from "react";
import { View } from "react-native";
import PagerView from "react-native-pager-view";
import { useSharedValue, withTiming } from "react-native-reanimated";

import { MagnetSegmentedTabs, MagnetPagerTabs } from "../../molecule";

import styles from "./styles";
import type { FriendsListProps } from "./types";
import { padding } from "../../../theme/primitive";
import FriendSkeleton from "./FriendSkeleton";

const FriendsList = <T extends string, ItemT>({
  tabs,
  renderItem,
  keyExtractor,
  isLoading,
}: FriendsListProps<T, ItemT>) => {
  const pagerRef = useRef<PagerView>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const progress = useSharedValue(0);

  const segmentedTabs = useMemo(
    () =>
      tabs.map((tab) => ({
        label: tab.label,
        value: tab.value,
      })),
    [tabs],
  );

  const handleTabPress = useCallback(
    (index: number) => {
      setActiveIndex(index);
      progress.value = withTiming(index, { duration: 160 });
      pagerRef.current?.setPage(index);
    },
    [progress],
  );

  const handlePageChange = useCallback(
    (index: number) => {
      setActiveIndex(index);
      progress.value = index;
    },
    [progress],
  );

  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: padding.x4 }}>
        <MagnetSegmentedTabs
          tabs={segmentedTabs}
          activeIndex={activeIndex}
          progress={progress}
          onTabPress={handleTabPress}
        />
      </View>

      <MagnetPagerTabs
        pagerRef={pagerRef}
        tabs={tabs}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        progress={progress}
        onPageChange={handlePageChange}
        isLoading={isLoading}
        skeletonRender={<FriendSkeleton />}
      />
    </View>
  );
};

export default memo(FriendsList) as typeof FriendsList;
