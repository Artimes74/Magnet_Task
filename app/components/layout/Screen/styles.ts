import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  padding: {
    paddingHorizontal: 16,
  },
  innerContainer: {
    width: '100%',
    paddingBottom: 16,
    backgroundColor: 'transparent',
  },
  loadingStyle: {
    ...StyleSheet.absoluteFill,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
