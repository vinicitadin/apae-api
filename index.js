require('dotenv').config();

const port = process.env.PORT; 

const express = require('express');

const app = express();

app.listen(port);

console.log(`Backend rodando na porta ${port}`);