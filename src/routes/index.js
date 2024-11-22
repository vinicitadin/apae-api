const express = require('express');
const router = express.Router();
const alunosRoutes = require('./alunosRoutes')

router.use(express.json());
router.use('/alunos', alunosRoutes);

module.exports = router;