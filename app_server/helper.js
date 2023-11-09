const hbs = require('hbs');

hbs.registerHelper('isSelected', function (pageTitle, expectedTitle, options) {
    return pageTitle === expectedTitle ? options.fn(this) : options.inverse(this);
});