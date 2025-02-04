const { DataTypes } = require('sequelize');
const sequelizeOfertas = require('../config/ofertas'); 


const Ofertas = sequelizeOfertas.define('Oferta', {
  Tipo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  endereco: {
    type: DataTypes.STRING,
    allowNull: false,
  },
   
});

module.exports = Ofertas;

