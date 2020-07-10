const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const Setor = require('./setor');

const Colaborador = sequelize.define('colaborador', {

    id: {
        field: 'colaboradorId',
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nome:{
        field: 'nome',
        type: Sequelize.STRING,
    },

    email:{
        field: 'email',
        type: Sequelize.STRING,
    },

    senha:{
        field: 'senha',
        type: Sequelize.STRING,
    },

    cargo:{
        field: 'cargo',
        type: Sequelize.STRING,
    },

    acesso: {
        field: 'acesso',
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false,
    freezeTableName: true 
},)

Setor.hasMany(Colaborador,{
    foreignKey: 'setorId'
});
Colaborador.belongsTo(Setor, {
    foreignKey: 'setorId'
});

module.exports = Colaborador;