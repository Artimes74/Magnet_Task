import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },

  tabsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },

  label: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.5)',
  },

  activeLabel: {
    color: '#FFFFFF',
    fontWeight: '600',
  },

  indicatorTrack: {
    width: '100%',
    height: 2,
    backgroundColor: 'rgba(255,255,255,0.08)',
    overflow: 'hidden',
  },

  indicator: {
    height: 2,
    backgroundColor: '#C58BFF',
  },
});

export default styles;
