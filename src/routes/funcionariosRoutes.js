const express = require('express');
const router = express.Router();
const db = require('../db/funcionarios');

router.get('/:id', async (req, res) => {
    const funcionarios = await db.selectFuncionario(req.params.id);
    res.json(funcionarios);
});

router.get('/', async (req, res) => {
    const funcionarios = await db.selectFuncionarios();
    res.json(funcionarios);
});

router.post('/', async (req, res) => {
    await db.insertFuncionario(req.body);
    res.sendStatus(201);
});

// router.put('/:id', async (req, res) => {
//     await db.updateFuncionario(req.params.id, req.body);
//     res.sendStatus(200);
// });

router.delete('/:id', async (req, res) => {
    await db.deleteFuncionario(req.params.id);
    res.sendStatus(204);
});

module.exports = router;