const express = require('express');
const router = express.Router();
const db = require('../db/loginFuncionarios');

router.get('/', async (req, res) => {
  const {username, password} = req.query;  
  if (!username || !password) {
    return res.status(400).json({ error: 'Username e password são obrigatórios' });
  }
  const funcionario = { username, password };
  const funcionarios = await db.loginFuncionarios(funcionario);
  if (funcionarios.length === 0) {
    return res.status(401).json({ error: 'Usuário ou senha inválidos' });
  }
  return res.json(funcionarios);
});

module.exports = router;