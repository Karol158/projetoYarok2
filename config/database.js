const{Sequelize}=require('sequelize');
const sequelize =new Sequelize({
 dialect:'sqlite',
 storage:'Cadastro.sqlite',
});
module.exports=sequelize;

