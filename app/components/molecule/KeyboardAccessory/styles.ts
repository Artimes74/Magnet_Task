import { StyleSheet } from 'react-native';
import { gap } from 'theme';

const styles = (disabled: boolean, loading: boolean) => {
  return StyleSheet.create({
    container: {
      backgroundColor: 'rgba(0,0,0,0)',
      zIndex: 3,
    },
    gradient: {
      minHeight: 56,
      borderRadius: 16,
      justifyContent: 'center',
      alignItems: 'center',
    },
    gradientTextAndIconContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: gap.x2,
    },
    title: {
      color: disabled || loading ? '#777777' : '#ffffff',
    },
  });
};

export default styles;
