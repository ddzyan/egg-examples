'use strict';

const { Service } = require('egg');

class StudentService extends Service {
  constructor(ctx) {
    super(ctx);
    this.model = ctx.model.Student;
  }

  // 获取学生所有信息，关联查询student和studentInfo
  async getAllStudent() {
    try {
      const { ctx } = this;
      const studentArray = await this.model.findAll({
        where: {
          status: true,
        },
        include: [{
          model: ctx.model.StudentInfo,
          attributes: [ 'age', 'sex' ],
        }],
        attributes: [ 'id', 'student_name', 'student_type', 'created_at' ],
      });

      const newStudentArray = studentArray.map(item => {
        const { id, student_name, student_type, created_at, student_info: { sex, age } } = item.dataValues;

        return { id, student_name, student_type, sex, age, created_at };
      });
      return newStudentArray;
    } catch (error) {
      console.error('getStudentInfo', error);
      throw error;
    }
  }
}

module.exports = StudentService;
