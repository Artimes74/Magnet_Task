const React = require('react');

function Icon({ name }) {
  return React.createElement('Text', {}, name || 'icon');
}

module.exports = Icon;
module.exports.default = Icon;
