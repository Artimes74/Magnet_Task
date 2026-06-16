import type {
  ScrollViewProps,
  StyleProp,
  ViewProps,
  ViewStyle,
} from 'react-native';
import type { KeyboardAwareScrollViewProps } from 'react-native-keyboard-aware-scroll-view';
import type { Edges } from 'react-native-safe-area-context';

export type ScreenProps = ScrollViewType | KeyboardAwareType | ViewType;

type BaseProps = {
  // testID?: string;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  loading?: boolean;
  hasPaddingHorizontal?: boolean;
  edges?: Edges;
  safeAreaStyle?: StyleProp<ViewStyle>;
};

type ViewType = BaseProps &
  ViewProps & {
    parentType?: 'View';
  };

type ScrollViewType = BaseProps &
  ScrollViewProps & {
    parentType: 'ScrollView';
  };

type KeyboardAwareType = BaseProps &
  KeyboardAwareScrollViewProps & {
    parentType: 'KeyboardAwareScrollView';
  };
