'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Cast_crew_members', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cast_crew_member: {
        type: Sequelize.STRING
      },
      filmId: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      author: {
        type: Sequelize.BOOLEAN
      },
      director: {
        type: Sequelize.BOOLEAN
      },
      leading_man: {
        type: Sequelize.BOOLEAN
      },
      leading_lady: {
        type: Sequelize.BOOLEAN
      },
      nemesis: {
        type: Sequelize.BOOLEAN
      },
      moll: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Cast_crew_members');
  }
};