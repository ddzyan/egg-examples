'use strict';

const { Controller } = require('egg');

class StudentController extends Controller {

  // mothod GET 获取全部学生信息
  async getALLStudentInfo() {
    const res = await this.ctx.service.dao.student.getAllStudent();
    this.ctx.status = 200;
    this.ctx.body = {
      data: res,
      code: 1,
    };
  }
}

module.exports = StudentController;
