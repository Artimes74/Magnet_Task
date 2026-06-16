import type { SharedValue } from 'react-native-reanimated';

export interface SegmentedTabItem<T extends string = string> {
  label: string;
  value: T;
}

export interface SegmentedTabsProps<T extends string = string> {
  tabs: SegmentedTabItem<T>[];
  activeIndex: number;
  progress: SharedValue<number>;
  onTabPress: (index: number) => void;
}
