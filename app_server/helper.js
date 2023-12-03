// helper.js

const hbs = require('hbs');

function registerHelpers() {
  hbs.registerHelper('isSelected', function (pageTitle, expectedTitle, options) {
    return pageTitle === expectedTitle ? options.fn(this) : options.inverse(this);
  });
}

module.exports = {
  register: registerHelpers
};