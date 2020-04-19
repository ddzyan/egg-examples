'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_operate', {
      id: {
        type: Sequelize.BIGINT(11).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        comment: '主键',
      },
      sid: {
        type: Sequelize.BIGINT(11).UNSIGNED,
        allowNull: false,
        comment: '学生Id',
      },
      keyWord: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: '关键字',
      },
      level: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        default: 1,
        comment: '关键字等级:1普通，2严重，3灾难',
      },
      create_time: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      update_time: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('user_operate');
  },
};
