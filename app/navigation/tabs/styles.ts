import { StyleSheet } from 'react-native';

export const customTabBarStyles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    height: 78,
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 14,
  },

  centerButton: {
    width: 58,
    height: 58,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  tab: {
    flex: 1,
    margin: 5,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  activeTab: {
    backgroundColor: '#C58BFF',
  },
});

export const tabGradientShellStyles = StyleSheet.create({
  centerShell: {
    width: 70,
    height: 70,
    borderRadius: 20,
    backgroundColor: '#120C0C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  groupShell: {
    flex: 2,
    height: 58,
    flexDirection: 'row',
    borderRadius: 16,
    backgroundColor: '#120C0C',
  },
  gradientLayer: {
    position: 'absolute',
    overflow: 'hidden',
  },

  groupGradientTop: {
    height: 58,
    width: '100%',
    borderRadius: 19,
    top: -1.5,
    left: -2.8,
  },

  groupGradientBottom: {
    height: 58,
    width: '100%',
    borderRadius: 19,
    top: 1.5,
    left: 2.3,
  },

  centerGradientTop: {
    width: 70,
    height: 70,
    borderRadius: 23,
    top: -1.5,
    left: -2.3,
  },

  centerGradientBottom: {
    width: 70,
    height: 70,
    borderRadius: 23,
    top: 1.5,
    left: 2.3,
  },
  groupBackground: {
    ...StyleSheet.absoluteFill,
    backgroundColor: '#120C0C',
    borderRadius: 16,
  },

  centerBackground: {
    ...StyleSheet.absoluteFill,
    backgroundColor: '#120C0C',
    borderRadius: 20,
  },
});
