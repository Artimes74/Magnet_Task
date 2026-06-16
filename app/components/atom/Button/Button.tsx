import React from 'react';
import { ActivityIndicator, Pressable, Text, View } from 'react-native';

import Icon from '../Icon/Icon';
import { IButtonProps } from './types';
import styles from './styles';

const MagnetButton = ({
  title,
  type = 'Fill',
  disabled = false,
  onPress,
  style,
  contentContainerStyle,
  titleStyle,
  titleProps,
  leftIconName,
  rightIconName,
  leftIconColor,
  leftIconSize = 24,
  rightIconSize = 24,
  rightIconColor,
  isLoading = false,
  testID,
}: IButtonProps) => {
  const indicatorColor = type === 'Fill' ? '#FFFFFF' : '#A85CFF';

  const buttonStyles = styles(type, disabled, style);

  return (
    <Pressable
      testID={testID}
      disabled={isLoading || disabled}
      onPress={onPress}
      style={[buttonStyles.container, style]}
    >
      <View style={[buttonStyles.content, contentContainerStyle]}>
        {leftIconName ? (
          <Icon
            name={leftIconName}
            size={leftIconSize ?? 24}
            color={disabled ? '#777777' : leftIconColor ?? '#FFFFFF'}
          />
        ) : null}
        {isLoading && type !== 'Text' ? (
          <ActivityIndicator color={indicatorColor} />
        ) : (
          <Text {...titleProps} style={[buttonStyles.title, titleStyle]}>
            {title}
          </Text>
        )}

        {rightIconName ? (
          <Icon
            name={rightIconName}
            size={rightIconSize ?? 24}
            color={disabled ? '#777777' : rightIconColor ?? '#FFFFFF'}
          />
        ) : null}
      </View>
    </Pressable>
  );
};

export default MagnetButton;
