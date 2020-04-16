'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('student', {
      id: {
        type: Sequelize.BIGINT(11).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        comment: '主键',
      },
      student_name: {
        type: Sequelize.STRING(10),
        allowNull: false,
        comment: '学生名称',
      },
      student_type: {
        type: Sequelize.INTEGER(1).UNSIGNED,
        allowNull: false,
        comment: '学生类型,1小学生，2中学生',
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        default: 1,
        comment: '状态值，1启用 0 关闭',
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('users');
  },
};
