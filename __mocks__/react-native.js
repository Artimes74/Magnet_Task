const React = require('react');

const createComponent = name => {
  const Component = ({ children, ...props }) =>
    React.createElement(name, props, children);

  Component.displayName = name;

  return Component;
};

module.exports = {
  View: createComponent('View'),
  Text: createComponent('Text'),
  Pressable: createComponent('Pressable'),
  TouchableHighlight: createComponent('TouchableHighlight'),
  TextInput: createComponent('TextInput'),
  Image: createComponent('Image'),

  Dimensions: {
    get: () => ({
      width: 390,
      height: 844,
      scale: 3,
      fontScale: 1,
    }),
  },

  StyleSheet: {
    create: styles => styles,
    flatten: style => style,
    absoluteFillObject: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
  },

  Platform: {
    OS: 'ios',
    select: obj => obj.ios ?? obj.default,
  },
};
