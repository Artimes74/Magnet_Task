import { StyleSheet } from 'react-native';

import { padding, radius } from 'theme';

import { IButtonProps } from './types';

const styles = (
  type: IButtonProps['type'],
  disabled: boolean,
  style: IButtonProps['style'],
) => {
  return StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: type === 'Text' ? 0 : padding.x6,
      paddingVertical: type === 'Text' ? 0 : padding.x5,
      backgroundColor:
        type === 'Fill' ? (disabled ? '#1A1B1E' : '#A85CFF') : 'transparent',
      borderWidth: type === 'Outline' ? 1 : 0,
      borderColor:
        type === 'Outline' ? (disabled ? '#1A1B1E' : '#A85CFF') : 'transparent',
      ...(style as object),
      borderRadius: radius.x5,
    },
    content: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: type === 'Text' ? 'auto' : '100%',
    },
    title: {
      paddingHorizontal: 8,
      textAlign: 'center',
      color: disabled ? '#777777' : type === 'Fill' ? '#FFFFFF' : '#A85CFF',
    },
  });
};

export default styles;
