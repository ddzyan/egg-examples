'use strict';
const db = require('../database/db');

module.exports = app => {
  const { Sequelize } = app;
  return db.defineModel(app, {
    studentId: {
      type: Sequelize.INTEGER(11).UNSIGNED,
      allowNull: false,
      comment: '学生id',
    },
    className: {
      type: Sequelize.STRING(10),
      allowNull: false,
      comment: '班级名称',
      set(className) {
        this.setDataValue('className', className.trim());
      },
    },
    grade: {
      type: Sequelize.INTEGER(2).UNSIGNED,
      allowNull: false,
      comment: '年级',
    },
    classNumber: {
      type: Sequelize.INTEGER(2).UNSIGNED,
      allowNull: false,
      comment: '班级',
    },
  });
};
