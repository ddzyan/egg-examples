'use strict';
// 用户表
module.exports = app => {
  const { Model } = app.Sequelize;

  class Student extends Model {
    static async getDetail({ id, attributes }) {
      const result = await Student.findByPk(id, {
        attributes,
      });

      return result;
    }

    static async saveNew(student) {
      const result = await Student.create(student);
      return result.id;
    }

    associate() {}
  }
  const studentSchema = require('../schema/student')(app);
  Student.init(studentSchema, {
    sequelize: app.model,
    comment: '学生信息表',
    tableName: 'student',
  });

  return Student;
};
