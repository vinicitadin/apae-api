const express = require('express');
const router = express.Router();
const alunosRoutes = require('./alunosRoutes')
const funcionariosRoutes = require('./funcionariosRoutes')
const loginAlunosRoutes = require('./loginAlunosRoutes');
const loginFuncionariosRoutes = require('./loginFuncionariosRoutes');

router.use(express.json());
router.use('/alunos', alunosRoutes);
router.use('/funcionarios', funcionariosRoutes);
router.use('/loginAlunos', loginAlunosRoutes);
router.use('/loginFuncionarios', loginFuncionariosRoutes);

module.exports = router;