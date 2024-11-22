const express = require('express');
const router = express.Router();
const alunosRoutes = require('./alunosRoutes')
const funcionariosRoutes = require('./funcionariosRoutes')

router.use(express.json());
router.use('/alunos', alunosRoutes);
router.use('/funcionarios', funcionariosRoutes);

module.exports = router;