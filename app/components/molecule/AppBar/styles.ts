import { StyleSheet } from 'react-native';
import { padding, size } from 'theme';

const styles = StyleSheet.create({
  container: {
    height: size.x16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: padding.x4,
  },

  side: {
    width: size.x10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  rightSide: {
    alignItems: 'flex-end',
  },

  title: {
    flex: 1,
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default styles;
