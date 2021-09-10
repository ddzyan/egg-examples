'use strict';
// 用户表
module.exports = app => {
  const { Model } = app.Sequelize;

  class Classroom extends Model {}
  const classroomSchema = require('../schema/classroom')(app);
  Classroom.init(classroomSchema, {
    sequelize: app.model,
    comment: '学生班级信息表',
    tableName: 'classroom',
  });

  return Classroom;
};
