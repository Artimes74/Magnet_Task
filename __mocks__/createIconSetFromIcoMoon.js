const React = require('react');

function createIconSetFromIcoMoon() {
  const BaseIcon = ({ name, onPress }) =>
    React.createElement(
      'Text',
      {
        onPress,
      },
      name || 'icon',
    );

  return BaseIcon;
}

module.exports = createIconSetFromIcoMoon;
module.exports.default = createIconSetFromIcoMoon;
