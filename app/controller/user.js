'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async saveUser() {
    const { ctx } = this;
    const params = ctx.request.body;
    const result = await ctx.service.user.saveUser(params);
    ctx.body = result;
  }

  async getUser() {
    const { ctx } = this;
    const { username } = ctx.query;
    const result = await ctx.service.user.getUser(username);
    ctx.body = result;
  }

  // 重置用户
  async resetUser() {
    const { ctx } = this;
    const { username } = ctx.query;
    const result = await ctx.service.user.getUser(username);
    ctx.body = result;
  }
}

module.exports = UserController;
