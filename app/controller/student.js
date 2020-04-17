'use strict';

const { Controller } = require('egg');

class StudentController extends Controller {

  // mothod GET 获取全部学生信息
  async getAllStudentInfo() {
    const res = await this.ctx.service.student.getAllStudent();
    this.ctx.body = res;
  }


  // method POST 添加学生
  async add() {
    const { ctx } = this;
    const { student_name, student_type, card_name, card_level } = ctx.request.body;
    const res = await ctx.service.student.addStudent({ student_name, student_type, card_name, card_level });
    this.ctx.body = res;
  }
}

module.exports = StudentController;
