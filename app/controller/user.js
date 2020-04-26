'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  // 保存用户
  async saveUser() {
    const { ctx } = this;
    const params = ctx.request.body;
    const res = await ctx.service.user.saveUser(params);
    ctx.body = res;
  }

  // 获取用户
  async getUser() {
    const { ctx } = this;
    const { username } = ctx.query;
    const res = await ctx.service.user.getUser(username);
    ctx.body = res;
  }

  // 重置用户
  async resetUser() {
    const { ctx } = this;
    const { username } = ctx.query;
    const res = await ctx.service.user.getUser(username);
    ctx.body = res;
  }

  // 给用户加钱
  async setUserMoney() {
    const { ctx } = this;
    const { username, money } = ctx.request.body;
    const res = await ctx.service.user.setUserMoney(username, money);
    ctx.body = res;
  }
}

module.exports = UserController;
