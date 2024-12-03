const express = require('express');
const router = express.Router();
const db = require('../db/agendamentos');

router.get('/:id', async (req, res) => {
    const frequencia = await db.selectFrequencia(req.params.id);
    res.json(frequencia);
});

router.get('/:aluno', async (req, res) => {
    const alunos = await db.selectAluno(req.params.aluno);
    res.json(alunos);
});

router.get('/:agendamento', async (req, res) => {
    const agendamentos = await db.selectAgendamento(req.params.agendamento);
    res.json(agendamentos);
});

router.get('/:presenca', async (req, res) => {
    const presenca = await db.selectPresenca(req.params.presenca);
    res.json(presenca);
});

router.get('/', async (req, res) => {
    const agendamentos = await db.selectAgendamento();
    res.json(agendamentos);
});

router.post('/', async (req, res) => {
    await db.insertAgendamento(req.body);
    res.sendStatus(201);
});

router.put('/:id', async (req, res) => {
    await db.updateAgendamento(req.params.id, req.body);
    res.sendStatus(200);
});

router.delete('/:id', async (req, res) => {
    await db.deleteAgendamento(req.params.id);
    res.sendStatus(204);
});

module.exports = router;