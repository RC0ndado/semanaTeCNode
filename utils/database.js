const Sequelize = require('sequelize');
// Objeto de conexión

const sequelize = new Sequelize('semanatec', 'admin', 'A2-AMAZON', {
    dialect:'mysql',
    host:'database-1.cnwa2cqrwvs6.us-east-1.rds.amazonaws.com',
    define: {
        timestamps:false,
        freezeTableName: true
   }
})

module.exports = sequelize;
