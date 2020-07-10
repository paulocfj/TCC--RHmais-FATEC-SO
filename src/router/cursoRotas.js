const express = require('express');
const CursoController = require('../controller/CursoController');
const cursoRotas = express.Router();

//lista todos os cursos
cursoRotas.get('/curso/listagem',CursoController.listagem);

//cadastra um novo curso
cursoRotas.post('curso/cadastrar', CursoController.cadastrar);

//procura um curso especifico
cursoRotas.get('/curso/:id', CursoController.procurar);


module.exports = cursoRotas;