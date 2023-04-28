const express = require('express');

// Import our modular routers for /tips and /feedback

const apiRoutes = require('./apiRoutes');
const htmlRoutes = require('./htmlRoutes');

const app = express();

app.use('/notes', apiRoutes);
app.use('/notes', htmlRoutes);


module.exports = app;