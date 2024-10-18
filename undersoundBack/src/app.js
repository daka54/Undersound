const express = require('express');
const morgan = require('morgan');
const config = require('./config');

const users = require('./modules/users/routes');
const usersAuth = require('./modules/usersAuth/routes');
const error = require('./red/errors');
const auth = require('./modules/auth/routes');

const app = express();

//Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//configuracion
app.set('port', config.app.port);

//rutas
app.use('/api/users', users);
app.use('/api/usersAuth', usersAuth);
app.use('/api/auth', auth);
app.use(error);

module.exports = app;