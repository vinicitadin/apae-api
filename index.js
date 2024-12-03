require('dotenv').config();
const port = process.env.PORT; 
const routes = require('./src/routes');

const express = require('express');
const app = express();

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});

app.use('/', routes);

app.listen(port, function () {
    console.log(`Executando na porta ${port}`);
});
