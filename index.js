require('dotenv').config();
const port = process.env.PORT; 
const db = require('./database');

const express = require('express');
const app = express();

app.listen(port, function () {
    console.log(`Executando na porta ${port}`);
});