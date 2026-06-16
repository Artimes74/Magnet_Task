import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import React from 'react';
import styles from './styles';
import { MagnetInput } from 'components/atom';
import { radius } from 'theme/primitive';

type Props = {
  StartComponent?: React.ReactNode;
  EndComponent?: React.ReactNode;
  startComponentStyle?: StyleProp<ViewStyle>;
  endComponentStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  onChangeText?: (text: string) => void;
};

const SearchBar = ({
  style,
  StartComponent,
  EndComponent,
  startComponentStyle,
  endComponentStyle,
  onChangeText,
}: Props) => {
  return (
    <View style={[styles.container, style]}>
      {StartComponent ? (
        <View style={[styles.startComponent, startComponentStyle]}>
          {StartComponent}
        </View>
      ) : null}
      <View style={styles.inputWrapper}>
        <MagnetInput
          style={{ borderRadius: radius.x10, height: 40 }}
          leftIconName="search-alt"
          rightIconName="filter-list"
          rightIconColor="#FFFFFF"
          placeholder="Search"
          onChangeText={onChangeText}
        />
      </View>
      {EndComponent ? (
        <View style={[styles.endComponent, endComponentStyle]}>
          {EndComponent}
        </View>
      ) : null}
    </View>
  );
};

export default SearchBar;
