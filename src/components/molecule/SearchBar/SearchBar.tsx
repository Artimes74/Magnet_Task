import { View } from "react-native";

import { MagnetInput } from "components";
import { Colors, radius } from "theme";

import React from "react";
import styles from "./styles";
import type { ISearchBar } from "./types";

const SearchBar = ({
  style,
  StartComponent,
  EndComponent,
  startComponentStyle,
  endComponentStyle,
  onChangeText,
}: ISearchBar) => {
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
          rightIconColor={Colors.text.primary}
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
