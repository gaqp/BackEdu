'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('BNCCs', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    code: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    description:{
      allowNull: false,
      type: Sequelize.STRING
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE,
    }
  }),
  down: queryInterface => queryInterface.dropTable('BNCCs'),
};