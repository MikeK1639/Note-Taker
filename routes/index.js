const express = require('express');
const apiRoutes = require('./apiRoutes');
const htmlRoutes = require('./htmlRoutes');
// requiring the HTML and API routes so that they can conversate.
const app = express();

app.use('/notes', apiRoutes);
app.use('/notes', htmlRoutes);


module.exports = app;