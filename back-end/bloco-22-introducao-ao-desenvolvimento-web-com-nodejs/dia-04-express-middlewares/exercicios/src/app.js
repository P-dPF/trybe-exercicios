const express = require('express');
const actvitiesRouter = require('./router/activitiesRouter');

const app = express();

app.use(express.json());

app.use('/activities', actvitiesRouter);

module.exports = app;
