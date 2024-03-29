'use strict';

const Controller = require('../core/base_controller');
const studentRule = require('../rule/student');

class StudentController extends Controller {
  async create() {
    const { ctx } = this;

    ctx.validate(studentRule.createRule);

    const { username, type, status } = ctx.request.body;

    const res = await ctx.service.student.saveNew({
      username,
      type,
      status,
    });

    this.success(res);
  }

  async get() {
    const { ctx } = this;
    ctx.validate(studentRule.queryRule, ctx.params);
    const { id } = ctx.params;

    const res = await ctx.service.student.get(id);

    this.success(res);
  }
}

module.exports = StudentController;
