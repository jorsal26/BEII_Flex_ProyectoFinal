const exphbs = require('express-handlebars');
const path = require('path');
const hbsHelpers = require('../utils/hbs.helpers');

module.exports = (app) => {
  app.engine('hbs', exphbs.engine({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, '../views/layouts'),
    partialsDir: path.join(__dirname, '../views/partials'),
    helpers: hbsHelpers
  }));
  app.set('view engine', 'hbs');
  app.set('views', path.join(__dirname, '../views'));
};