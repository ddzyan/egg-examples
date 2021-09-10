'use strict';

const StudentType = [ '小学生', '中学生', '高中生' ];

module.exports = app => {
  const { Sequelize } = app;

  return {
    id: {
      type: Sequelize.INTEGER(11).UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      comment: '主键',
    },
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
    createdTime: {
      type: Sequelize.DATE,
      allowNull: false,
      comment: '创建时间',
    },
    updatedTime: {
      type: Sequelize.DATE,
      allowNull: false,
      comment: '更新时间',
    },
    deletedTime: {
      type: Sequelize.DATE,
      allowNull: true,
      comment: '删除时间',
    },
  };
};
