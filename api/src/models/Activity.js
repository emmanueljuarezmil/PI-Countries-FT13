const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('activity', {
    id:{
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    difficult: {
      type: DataTypes.ENUM('1','2','3','4','5')
    },
    duration: {
      type: DataTypes.INTEGER
    },
    season: {
      type: DataTypes.ENUM('Verano', 'Otoño', 'Primavera', 'Invierno')
    },
    description: {
      type: DataTypes.TEXT,
    }
  });
};
