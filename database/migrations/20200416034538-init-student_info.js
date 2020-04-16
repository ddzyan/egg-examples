'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('student_info', {
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
      age: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        comment: '年龄',
      },
      sex: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        default: 1,
        comment: '性别,1男，0女',
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('student_info');
  },
};
