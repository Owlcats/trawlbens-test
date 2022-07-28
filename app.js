const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');

const swaggerUi = require('swagger-ui-express');
const apiDocumentation = require('./docs.json');
app.use('docs',swaggerUi.serve, swaggerUi.setup(apiDocumentation));

const moviesRouter = require('./app/api/movies/router');

const URL = '/api/v1';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function (req, res){
    message : 'Loremp Ipsum'
})

app.use(`${URL}`, moviesRouter);
app.use(function(req, res, next){
    const err = new Error ('Not Found');
    err.status = 404;
    next(err);
});

app.use(function(err, req, res, next){
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err:{};
    res.status(err.status || 500).json({message : err.message});
})
// app.use('/users', usersRouter);

module.exports = app;
