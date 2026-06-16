import React, { forwardRef } from 'react';
import { TextInput, View } from 'react-native';

import { size } from 'theme';

import Icon from '../Icon/Icon';

import styles from './styles';
import ITextInput from './types';

const MagnetTextInput = forwardRef(
  (props: ITextInput, ref: React.ForwardedRef<TextInput>) => {
    const {
      style,
      leftIconName,
      rightIconName,
      editable = true,
      secureTextEntry = false,
      onFocus,
      onEndEditing,
      onPressRightIcon,
      inputStyle,
      onChangeText,
      maxLength,
      isRightIconDisabled,
      hasClear,
      onPressClear,
      rightIconColor,
      leftIconColor,
      hasError,
    } = props;

    const shouldShowRightSection = Boolean(rightIconName || hasClear);

    const textInputStyle = styles(editable, !!leftIconName, hasError ?? false);

    return (
      <View style={[textInputStyle.Container, style]}>
        {leftIconName ? (
          <Icon
            name={leftIconName}
            size={size.x4}
            style={[textInputStyle.leftIcon]}
            color={leftIconColor}
          />
        ) : null}

        <TextInput
          {...props}
          ref={ref}
          onChangeText={input => {
            if (input?.length <= (maxLength || Infinity)) onChangeText?.(input);
          }}
          hitSlop={textInputStyle.hitSlop}
          secureTextEntry={secureTextEntry}
          editable={editable}
          style={[textInputStyle.input, inputStyle]}
          placeholderTextColor={'gray'}
          onFocus={e => {
            onFocus?.(e);
          }}
          onEndEditing={e => {
            onEndEditing?.(e);
          }}
        />
        {shouldShowRightSection && (
          <View style={textInputStyle.rowIconContainer}>
            {rightIconName ? (
              <Icon
                name={rightIconName}
                disabled={!editable || isRightIconDisabled}
                onPress={onPressRightIcon}
                size={16}
                style={textInputStyle.rightIcon}
                color={rightIconColor}
              />
            ) : null}

            {hasClear ? (
              <Icon
                name="x-mark"
                disabled={!editable || isRightIconDisabled}
                onPress={onPressClear}
                size={16}
                style={textInputStyle.rightIcon}
              />
            ) : null}
          </View>
        )}
      </View>
    );
  },
);

export default MagnetTextInput;
