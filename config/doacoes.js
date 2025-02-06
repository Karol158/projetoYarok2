const{Sequelize}=require('sequelize');
const sequelizeDoacoes =new Sequelize({
 dialect:'sqlite',
 storage:'Doacoes.sqlite',
});
module.exports=sequelizeDoacoes;