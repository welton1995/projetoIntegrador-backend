const express = require('express');
const matriculaController = require('../controllers/matriculaController');
const entradaController = require('../controllers/entradaController');

const routes = express.Router();

// Matriculas
routes.get('/matriculas', matriculaController.listar); // Listar
routes.get('/matriculas/:matricula', matriculaController.listarId); // Listar por matricula
routes.get('/matriculas/cpf/:cpf', matriculaController.listarCPF); // Busca por CPF
routes.post('/matriculas', matriculaController.cadastrar); // Criar
routes.put('/matriculas/:id', matriculaController.atualizar); // Atualizar
routes.delete('/matriculas/:id', matriculaController.remover); // Remover

// Acessos ou entradas
routes.get('/entradas', entradaController.listar); // Listar
routes.post('/entradas', entradaController.cadastrar); // Criar
routes.put('/entradas/:id', entradaController.atualizar); // Atualizar
routes.delete('/entradas/:id', entradaController.remover); // Remover

module.exports = routes