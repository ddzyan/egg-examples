'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('card', {
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
      card_name: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: '卡片名称',
      },
      card_level: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        default: 1,
        comment: '卡片等级:1银卡，2金卡',
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
    await queryInterface.dropTable('card');
  },
};
