const express = require('express');
const router = express.Router();
const db = require('../db/agendamentos');

router.get('/:id', async (req, res) => {
    const agendamentos = await db.selectAgendamento(req.params.id);
    res.json(agendamentos);
});

router.get('/:aluno', async (req, res) => {
    const alunos = await db.selectAluno(req.params.aluno);
    res.json(alunos);
});

router.get('/:funcionario', async (req, res) => {
    const funcionarios = await db.selectFuncionario(req.params.funcionario);
    res.json(funcionarios);
});

router.get('/:date', async (req, res) => {
    const date = await db.selectDate(req.params.date);
    res.json(date);
});

router.get('/:hora_inicio', async (req, res) => {
    const time = await db.selectTime(req.params.time);
    res.json(time);
});

router.get('/:hora_fim', async (req, res) => {
    const time = await db.selectTime(req.params.time);
    res.json(time);
});

router.get('/:tipo_atendimento', async (req, res) => {
    const tipo = await db.selectTipo(req.params.tipo);
    res.json(tipo);
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
