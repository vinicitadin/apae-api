require('dotenv').config();
const port = process.env.PORT; 
const db = require('./database');

const express = require('express');
const app = express();

app.use(express.json());

app.get('/professionals/:id', async (req, res) => {
    const professionals = await db.selectProfessional(req.params.id);
    res.json(professionals);
});

app.get('/professionals', async (req, res) => {
    const professionals = await db.selectProfessionals();
    res.json(professionals);
});

app.post('/professionals', async (req, res) => {
    await db.insertProfessional(req.body);
    res.sendStatus(201);
});

app.put('/professionals/:id', async (req, res) => {
    await db.updateProfessional(req.params.id, req.body);
    res.sendStatus(200);
});

app.delete('/professionals/:id', async (req, res) => {
    await db.deleteProfessional(req.params.id);
    res.sendStatus(204);
});

app.listen(port, function () {
    console.log(`Executando na porta ${port}`);
});