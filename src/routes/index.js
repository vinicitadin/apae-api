const express = require('express');
const router = express.Router();
const alunosRoutes = require('./alunosRoutes')
const funcionariosRoutes = require('./funcionariosRoutes')
const loginAlunosRoutes = require('./loginAlunosRoutes');
const loginFuncionariosRoutes = require('./loginFuncionariosRoutes');
const agendamentosRoutes = require('./agendamentosRoutes');
const frequenciasRoutes = require('./frequenciaRoutes');

router.use(express.json());
router.use('/alunos', alunosRoutes);
router.use('/funcionarios', funcionariosRoutes);
router.use('/loginAlunos', loginAlunosRoutes);
router.use('/loginFuncionarios', loginFuncionariosRoutes);
router.use('/agendamentos', agendamentosRoutes);
routes.use('/frequencias', frequenciasRoutes);

module.exports = router;
