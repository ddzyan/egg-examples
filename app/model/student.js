'use strict';
// 用户表
module.exports = app => {
  const { Model } = app.Sequelize;

  class Student extends Model {
    static async getDetail({ id, attributes }) {
      const result = await Student.findByPk(id, {
        include: [
          {
            model: app.model.Classroom,
            attributes: [ 'grade', 'classNumber', 'className' ],
          },
        ],
        attributes,
      });

      return result;
    }

    static async saveNew(student) {
      const result = await Student.create(student);
      return result.id;
    }
  }

  Student.associate = function() {
    Student.belongsTo(app.model.Classroom, {
      foreignKey: 'id',
      targetKey: 'studentId',
    });
  };

  const studentSchema = require('../schema/student')(app);
  Student.init(studentSchema, {
    sequelize: app.model,
    comment: '学生信息表',
    tableName: 'student',
  });

  return Student;
};
