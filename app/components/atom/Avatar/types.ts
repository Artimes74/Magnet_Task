import type { ImageStyle, StyleProp, ImageRequireSource } from 'react-native';
import type { Source } from 'react-native-fast-image';

export type AvatarVariant = 'story' | 'list';

export interface AvatarProps {
  uri?: string;
  source?: Source | number;
  size?: number;
  variant?: AvatarVariant;
  style?: StyleProp<ImageStyle>;
  isOwner?: boolean;
  isOnline?: boolean;
  hasBorder?: boolean;
}
