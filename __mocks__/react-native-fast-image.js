const React = require('react');

const FastImage = ({ children, ...props }) =>
  React.createElement('FastImage', props, children);

FastImage.resizeMode = {
  cover: 'cover',
  contain: 'contain',
  stretch: 'stretch',
  center: 'center',
};

FastImage.priority = {
  low: 'low',
  normal: 'normal',
  high: 'high',
};

FastImage.cacheControl = {
  immutable: 'immutable',
  web: 'web',
  cacheOnly: 'cacheOnly',
};

module.exports = FastImage;
module.exports.default = FastImage;
