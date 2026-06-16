const React = require('react');

const createSvgComponent = name => {
  const Component = ({ children, ...props }) =>
    React.createElement(name, props, children);

  Component.displayName = name;

  return Component;
};

const Svg = createSvgComponent('Svg');

module.exports = Svg;
module.exports.default = Svg;

module.exports.Defs = createSvgComponent('Defs');
module.exports.RadialGradient = createSvgComponent('RadialGradient');
module.exports.LinearGradient = createSvgComponent('SvgLinearGradient');
module.exports.Rect = createSvgComponent('Rect');
module.exports.Stop = createSvgComponent('Stop');
module.exports.Path = createSvgComponent('Path');
module.exports.Circle = createSvgComponent('Circle');
module.exports.G = createSvgComponent('G');
