const Colaborador = require('../models/colaborador');
const Setor = require('../models/setor');
const express = require('express');
const app = express();
const handleBars = require('express-handlebars');
const passport = require('passport');
app.engine('handlebars',handleBars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

module.exports = {

    async listagem(req, res) {

        await Colaborador.findAll({
            include: [Setor]
        }).then((colaboradores) => {
           res.render('colaboradores',{colaboradores: colaboradores})
        });
    },

    async procurar(req, res) {

        let { id } = req.params;

        await Colaborador.findByPk(id, {
            include: [Setor]
        }).then((colaborador) => {
            if (colaborador)
                res.json(colaborador);
            else
                res.status(404).send();
        })
    },

    async login(req, res, next){
         
        passport.authenticate("local", {

            successRedirect: '/colaborador/listagem',
            failureRedirect: '/login',
            failureFlash: true
        })(req,res,next)
    }

}