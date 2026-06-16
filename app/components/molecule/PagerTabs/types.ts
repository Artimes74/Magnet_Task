import type { ListRenderItem } from 'react-native';
import type { SharedValue } from 'react-native-reanimated';

export interface PagerTabItem<T extends string, ItemT> {
  label: string;
  value: T;
  data: ItemT[];
  swipeEnabled?: boolean;
}

export interface PagerTabsProps<T extends string, ItemT> {
  tabs: PagerTabItem<T, ItemT>[];
  renderItem: ListRenderItem<ItemT>;
  keyExtractor: (item: ItemT, index: number) => string;
  onPageChange: (index: number) => void;
  progress: SharedValue<number>;
  pagerRef?: React.RefObject<any>;
}
