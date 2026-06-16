const React = require('react');

const View = ({ children, ...props }) =>
  React.createElement('View', props, children);

const Animated = {
  View,
  Text: ({ children, ...props }) =>
    React.createElement('Text', props, children),
  ScrollView: View,
  FlatList: View,
  createAnimatedComponent: Component => Component,
};

module.exports = {
  __esModule: true,
  default: Animated,

  useSharedValue: value => ({ value }),

  useAnimatedStyle: callback => callback(),

  withTiming: value => value,
  withSpring: value => value,

  interpolate: () => 0,
  Extrapolation: {
    CLAMP: 'clamp',
  },

  runOnJS: fn => fn,

  Easing: {
    linear: jest.fn(),
    ease: jest.fn(),
    inOut: jest.fn(fn => fn),
  },

  setUpTests: jest.fn(),
};
