const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    name: {
      type: DataTypes.STRING
    },
    difficult: {
      type: DataTypes.ENUM('1','2','3','4','5')
      // type: DataTypes.INTEGER
    },
    duration: {
      type: DataTypes.INTEGER
    },
    season: {
      type: DataTypes.ENUM('verano', 'otoño', 'primavera', 'invierno')
      // type: DataTypes.INTEGER
    }
  });
};
