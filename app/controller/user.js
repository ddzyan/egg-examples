'use strict';

const Controller = require('../core/base_controller');

class UserController extends Controller {
  async login() {
    const { ctx } = this;

    const result = { name: 'admin', userType: '1' };
    ctx.setToken(result);
    this.success(result);
  }

  logout() {
    this.ctx.removeToken();
    this.success();
  }
}

module.exports = UserController;
