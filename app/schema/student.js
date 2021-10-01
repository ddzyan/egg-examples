'use strict';
const db = require('../core/base_schema');

const StudentType = [ '小学生', '中学生', '高中生' ];

module.exports = app => {
  const { Sequelize } = app;
  return db.defineModel(app, {
    username: {
      type: Sequelize.STRING(10),
      allowNull: false,
      comment: '用户名称',
      set(username) {
        this.setDataValue('username', username.toString().toLowerCase());
      },
    },
    type: {
      type: Sequelize.INTEGER(1).UNSIGNED,
      allowNull: false,
      default: 1,
      comment: '类型:1小学生，2中学生,3高中生',
      get() {
        const type = this.getDataValue('type');
        return StudentType[type - 1] || '配置错误';
      },
    },
    status: {
      type: Sequelize.BOOLEAN, // 1返回true，0返回false
      allowNull: false,
      default: 1,
      comment: '状态值:1启用 0 关闭',
    },
  });
};
