'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user', {
      id: {
        type: Sequelize.BIGINT(11).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        comment: '主键',
      },
      username: {
        type: Sequelize.STRING(10),
        allowNull: false,
        comment: '用户名称',
      },
      type: {
        type: Sequelize.INTEGER(1).UNSIGNED,
        allowNull: false,
        comment: '类型:1小学生，2中学生',
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        default: 1,
        comment: '状态值，1启用 0 关闭',
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
    await queryInterface.dropTable('user');
  },
};
