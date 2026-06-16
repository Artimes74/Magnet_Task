import React, { useCallback, useState } from 'react';
import { LayoutChangeEvent, View } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

import SegmentedTab from './SegmentedTab';
import styles from './styles';
import type { SegmentedTabsProps } from './types';

const SegmentedTabs = <T extends string>({
  tabs,
  activeIndex,
  progress,
  onTabPress,
}: SegmentedTabsProps<T>) => {
  const [containerWidth, setContainerWidth] = useState(0);

  const handleLayout = useCallback((event: LayoutChangeEvent) => {
    setContainerWidth(event.nativeEvent.layout.width);
  }, []);

  const indicatorStyle = useAnimatedStyle(() => {
    const tabWidth = containerWidth / tabs.length;

    return {
      width: tabWidth,
      transform: [
        {
          translateX: progress.value * tabWidth,
        },
      ],
      opacity: containerWidth > 0 ? 1 : 0,
    };
  }, [containerWidth, tabs.length]);

  return (
    <View style={styles.container} onLayout={handleLayout}>
      <View style={styles.tabsRow}>
        {tabs.map((tab, index) => (
          <SegmentedTab
            key={tab.value}
            label={tab.label}
            isActive={index === activeIndex}
            onPress={() => onTabPress(index)}
          />
        ))}
      </View>

      <View style={styles.indicatorTrack}>
        <Animated.View style={[styles.indicator, indicatorStyle]} />
      </View>
    </View>
  );
};

export default SegmentedTabs;
