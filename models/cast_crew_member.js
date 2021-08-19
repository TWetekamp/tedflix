'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cast_crew_member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      // define association here
      Cast_crew_member.belongsTo(models.Film, {
        foreignKey: 'filmId',
        onDelete: 'CASCADE'
      });
    }
  };
  Cast_crew_member.init({
    cast_crew_member: DataTypes.STRING,
    filmId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    author: DataTypes.BOOLEAN,
    director: DataTypes.BOOLEAN,
    leading_man: DataTypes.BOOLEAN,
    leading_lady: DataTypes.BOOLEAN,
    nemesis: DataTypes.BOOLEAN,
    moll: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Cast_crew_member',
  });
  return Cast_crew_member;
};