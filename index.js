require('dotenv').config();
const port = process.env.PORT; 
const routes = require('./src/routes');

const express = require('express');
const app = express();

app.use('/', routes);

app.listen(port, function () {
    console.log(`Executando na porta ${port}`);
});