const React = require('react');

const KeyboardAccessoryView = ({ children, ...props }) =>
  React.createElement('KeyboardAccessoryView', props, children);

module.exports = {
  KeyboardAccessoryView,
};
