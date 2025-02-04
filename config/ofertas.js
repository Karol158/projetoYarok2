const{Sequelize}=require('sequelize');
const sequelizeOfertas =new Sequelize({
 dialect:'sqlite',
 storage:'Ofertas.sqlite',
});
module.exports=sequelizeOfertas;