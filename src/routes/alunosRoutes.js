const express = require('express');
const router = express.Router();
const db = require('../db/alunos');

router.get('/:id', async (req, res) => {
    const alunos = await db.selectAluno(req.params.id);
    res.json(alunos);
});

router.get('/', async (req, res) => {
    const alunos = await db.selectAlunos();
    res.json(alunos);
});

router.post('/', async (req, res) => {
    await db.insertAluno(req.body);
    res.sendStatus(201);
});

router.put('/:id', async (req, res) => {
    await db.updateAluno(req.params.id, req.body);
    res.sendStatus(200);
});

router.delete('/:id', async (req, res) => {
    await db.deleteAluno(req.params.id);
    res.sendStatus(204);
});

module.exports = router;