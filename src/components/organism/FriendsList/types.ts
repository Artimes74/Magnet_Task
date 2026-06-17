import type { ListRenderItem } from "react-native";
import type { PagerTabItem } from "../../molecule/PagerTabs";

export interface FriendsListProps<T extends string, ItemT> {
  tabs: PagerTabItem<T, ItemT>[];
  renderItem: ListRenderItem<ItemT>;
  keyExtractor: (item: ItemT, index: number) => string;
  isLoading?: boolean;
}
