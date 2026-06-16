import { StyleSheet } from 'react-native';

import { padding, radius } from 'theme';

const styles = (hasBorder: boolean) => {
  return StyleSheet.create({
    container: {
      backgroundColor: 'transparent',
      borderWidth: hasBorder ? 1 : 0,
      borderColor: '#C29EFF',
      padding: padding.x1 / 1.8,
    },
    image: {
      flex: 1,
      width: '100%',
      height: '100%',
      backgroundColor: 'black',
    },
    ownerBadge: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      width: 30,
      height: 30,
      borderRadius: radius.x3,
      borderWidth: 2,
      borderColor: '#FFFFFF',
      backgroundColor: '#777777',
      justifyContent: 'center',
      alignItems: 'center',
    },
    fallback: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#1A1B1E',
    },
    onlineIndicator: {
      position: 'absolute',
      backgroundColor: '#30D158',
      borderWidth: 1.5,
      borderColor: '#120C0C',
    },
  });
};

export default styles;
