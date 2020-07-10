const express = require('express');
const ColaboradorController = require('../controller/ColaboradorController');
const colaboradorRotas = express.Router();
const { nivelGestor, estaLogado } = require('../helpers/acesso');

colaboradorRotas.get('/colaborador/listagem', nivelGestor ,ColaboradorController.listagem);

colaboradorRotas.get('/', estaLogado);

colaboradorRotas.get('/login', estaLogado, (req,res)=>{
    res.render("login")
})

colaboradorRotas.get('/login/:id', ColaboradorController.procurar);

colaboradorRotas.post('/colaborador/login', ColaboradorController.login);

module.exports = colaboradorRotas;