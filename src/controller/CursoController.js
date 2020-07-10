const Curso = require('../models/curso');

module.exports = {

    async listagem(req, res){
       await Curso.findAll().then((cursos)=>{
            res.json(cursos);
        })
    },

    async cadastrar(req, res){

        let {cargaHoraria, descricao, nome, valor} = req.body;

        await Curso.create({
            nome: nome,
            valor: valor,
            cargaHoraria: cargaHoraria,
            descricao: descricao
        }).then((curso)=>{

            res.json(curso);
        }).catch((err)=>{
            console.log('erro ao cadastrar curso: ' + err);
        })
    },

    async procurar(req, res){

        let { id } = req.params;

        Curso.findByPk(id).then((curso)=>{
            res.json(curso);
        })
    }

}