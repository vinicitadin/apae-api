const express = require('express');
const router = express.Router();
const db = require('../db/loginAlunos');

router.get('/', async (req, res) => {
  const {username, password} = req.query;  
  if (!username || !password) {
    return res.status(400).json({ error: 'Username e password são obrigatórios' });
  }
  const aluno = { username, password };
  const alunos = await db.loginAlunos(aluno);
  if (alunos.length === 0) {
    return res.status(401).json({ error: 'Usuário ou senha inválidos' });
  }
  return res.json(alunos);
});

module.exports = router;