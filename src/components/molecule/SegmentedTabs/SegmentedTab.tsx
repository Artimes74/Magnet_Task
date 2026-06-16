import React, { memo } from 'react';
import { Pressable, Text } from 'react-native';

import styles from './styles';

interface Props {
  label: string;
  isActive: boolean;
  onPress: () => void;
}

const SegmentedTab = ({ label, isActive, onPress }: Props) => {
  return (
    <Pressable onPress={onPress} style={styles.tab}>
      <Text style={[styles.label, isActive && styles.activeLabel]}>
        {label}
      </Text>
    </Pressable>
  );
};

export default memo(SegmentedTab);
