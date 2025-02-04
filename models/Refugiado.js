const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');  // Caminho relativo correto

const Refugiado = sequelize.define('Refugiado', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Refugiado;
