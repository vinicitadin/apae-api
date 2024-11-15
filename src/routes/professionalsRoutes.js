const express = require('express');
const router = express.Router();
const db = require('../db/professionals');

router.get('/:id', async (req, res) => {
    const professionals = await db.selectProfessional(req.params.id);
    res.json(professionals);
});

router.get('/', async (req, res) => {
    const professionals = await db.selectProfessionals();
    res.json(professionals);
});

router.post('/', async (req, res) => {
    await db.insertProfessional(req.body);
    res.sendStatus(201);
});

router.put('/:id', async (req, res) => {
    await db.updateProfessional(req.params.id, req.body);
    res.sendStatus(200);
});

router.delete('/:id', async (req, res) => {
    await db.deleteProfessional(req.params.id);
    res.sendStatus(204);
});

module.exports = router;