import React from 'react';
import { ActivityIndicator, Pressable, Text, View } from 'react-native';
import { KeyboardAccessoryView } from 'react-native-keyboard-accessory';

import { MagnetIcon, MagnetButton } from 'components/atom';

import GradientButtonBackground from './GradientButtonBackground';
import { IKeyboardAccessoryProps } from './types';
import styles from './styles';

const KeyboardAccessory = (props: IKeyboardAccessoryProps) => {
  const {
    type = 'Fill',
    title,
    isLoading = false,
    disabled = false,
    onPress,
    containerStyle,
    buttonStyle,
    accessoryProps,
    testID,
  } = props;

  const customButtonStyle = styles(disabled, isLoading);
  return (
    <KeyboardAccessoryView
      animateOn="all"
      androidAdjustResize
      hideBorder
      bumperHeight={0}
      alwaysVisible={true}
      heightProperty="minHeight"
      style={[customButtonStyle.container, containerStyle]}
      {...accessoryProps}
    >
      {type === 'Gradient' ? (
        <Pressable
          testID={testID}
          onPress={onPress}
          disabled={disabled || isLoading}
          style={customButtonStyle.gradient}
        >
          <GradientButtonBackground disabled={disabled} />
          <View style={customButtonStyle.gradientTextAndIconContainer}>
            {isLoading ? (
              <ActivityIndicator color={'#FFFFFF'} />
            ) : (
              <>
                <MagnetIcon
                  name="arrow-right-to-bracket"
                  color={disabled ? '#777777' : '#ffffff'}
                />
                <Text style={customButtonStyle.title}>{title}</Text>
              </>
            )}
          </View>
        </Pressable>
      ) : (
        <MagnetButton
          testID={testID}
          {...props}
          type={type}
          title={title}
          isLoading={isLoading}
          disabled={disabled}
          onPress={onPress}
          style={buttonStyle}
        />
      )}
    </KeyboardAccessoryView>
  );
};

export default KeyboardAccessory;
