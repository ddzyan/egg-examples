'use strict';

module.exports = app => {
  const { Sequelize } = app;
  const StudentInfo = app.model.define('student_info', {
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
      comment: '性别:1男，0女',
      get() {
        return this.getDataValue('sex') === 1 ? '男' : '女';
      },
    },
  });

  StudentInfo.associate = () => {

  };
  return StudentInfo;
};
