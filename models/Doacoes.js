const { DataTypes } = require('sequelize');
const sequelizeDoacoes = require('../config/doacoes'); 


const Doacoes = sequelizeDoacoes.define('Oferta', {
  Doaçao : {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Local: {
    type: DataTypes.STRING,
    allowNull: false,
  },
   
});

module.exports = Doacoes;
