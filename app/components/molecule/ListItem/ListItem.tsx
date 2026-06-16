import React, { memo } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';

import { MagnetIcon } from 'components/atom';
import styles from './styles';
import type { ListItemProps } from './types';
import { gap, size } from 'theme/primitive';

const ListItem = ({
  itemKey,
  title,
  titleStyle,
  titleNumberOfLines = 1,
  titleEllipsizeMode = 'tail',
  StartComponent,
  EndComponent,
  startComponentStyle,
  endComponentStyle,
  style,
  contentStyle,
  disabled = false,
  underlayColor,
  onPress,
  onLongPress,
  hasIconInTitle,
  hasMoreAction = false,
  onPressMore,
}: ListItemProps) => {
  return (
    <TouchableHighlight
      key={itemKey}
      style={[styles.container, style]}
      onPress={onPress}
      disabled={disabled}
      underlayColor={underlayColor || styles.underlay.color}
      onLongPress={onLongPress}
    >
      <View style={[styles.contentContainer, contentStyle]}>
        {StartComponent ? (
          <View style={[styles.startComponent, startComponentStyle]}>
            {StartComponent}
          </View>
        ) : null}

        <View style={styles.textContainer}>
          <Text
            style={[styles.title, titleStyle]}
            numberOfLines={titleNumberOfLines}
            ellipsizeMode={titleEllipsizeMode}
          >
            {title}
          </Text>
          {hasIconInTitle && (
            <MagnetIcon
              name="badge-check-2"
              color="#007AFF"
              size={size.x4}
              style={{
                marginLeft: gap.x1,
              }}
            />
          )}
        </View>

        {EndComponent || hasMoreAction ? (
          <View style={[styles.endComponents, endComponentStyle]}>
            {EndComponent}

            {hasMoreAction ? (
              <MagnetIcon
                name="eye-icon"
                size={size.x5}
                color="#FFFFFF"
                onPress={onPressMore}
              />
            ) : null}
          </View>
        ) : null}
      </View>
    </TouchableHighlight>
  );
};

export default memo(ListItem);
