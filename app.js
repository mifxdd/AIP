const path = require('path');
const express = require('express');
const routes = require('./routes/index');

const app = express();

app.engine('ejs', require('ejs-locals'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.locals.siteName = 'Видеокарта';
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);

module.exports = app;
