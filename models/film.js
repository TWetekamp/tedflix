'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Film extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      // Films hasMany cast and crew members
      Film.hasMany(models.Cast_crew_member, {
        foreignKey: 'filmId'
      });
    }
  };
  Film.init({
    title: DataTypes.STRING,
    production_co: DataTypes.STRING,
    release: DataTypes.DATEONLY,
    last_viewed: DataTypes.DATEONLY,
    my_rating: DataTypes.INTEGER,
    my_top_ten: DataTypes.INTEGER,
    afi_top_100: DataTypes.INTEGER,
    library: DataTypes.STRING,
    format: DataTypes.STRING,
    set: DataTypes.STRING,
    poster: DataTypes.BOOLEAN,
    night_at_the_movies: DataTypes.BOOLEAN,
    train_scenes: DataTypes.BOOLEAN,
    nbr_of_discs: DataTypes.INTEGER,
    genre: DataTypes.STRING,
    storyline: DataTypes.TEXT,
    comments: DataTypes.TEXT,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Film',
  });
  return Film;
};