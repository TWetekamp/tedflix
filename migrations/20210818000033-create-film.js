'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Films', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      production_co: {
        type: Sequelize.STRING
      },
      release: {
        type: Sequelize.DATEONLY
      },
      last_viewed: {
        type: Sequelize.DATEONLY
      },
      my_rating: {
        type: Sequelize.INTEGER
      },
      my_top_ten: {
        type: Sequelize.INTEGER
      },
      afi_top_100: {
        type: Sequelize.INTEGER
      },
      library: {
        type: Sequelize.STRING
      },
      format: {
        type: Sequelize.STRING
      },
      set: {
        type: Sequelize.STRING
      },
      poster: {
        type: Sequelize.BOOLEAN
      },
      night_at_the_movies: {
        type: Sequelize.BOOLEAN
      },
      train_scenes: {
        type: Sequelize.BOOLEAN
      },
      nbr_of_discs: {
        type: Sequelize.INTEGER
      },
      genre: {
        type: Sequelize.STRING
      },
      storyline: {
        type: Sequelize.TEXT
      },
      comments: {
        type: Sequelize.TEXT
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Films');
  }
};