const express = require('express');
const actvitiesRouter = require('./router/activitiesRouter');
const signUpRouter = require('./router/signUpRouter');

const app = express();

app.use(express.json());

app.use('/activities', actvitiesRouter);
app.use('/signup', signUpRouter);

module.exports = app;
