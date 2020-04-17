'use strict';

const { Service } = require('egg');

const DEFAULT_REDIS_USER = 'demo:user';

class UserService extends Service {
  constructor(ctx) {
    super(ctx);
    this.redis = this.app.redis;
  }

  /**
   * 保存用户信息
   * @param {Object} params 用户对象
   * @param {string} params.username 用户名称
   * @param {number} params.sex 用户年龄
   */
  async saveUser(params) {
    try {
      const { username, sex } = params;
      const userExist = await this.redis.hget(DEFAULT_REDIS_USER, username);
      if (userExist) {
        return true;
      }
      const userDefault = {
        username, monery: 0, sex,
      };
      const userJsonStr = JSON.stringify(userDefault);
      // 持久化数据不需要设置过期时间
      const result = await this.redis.hset(DEFAULT_REDIS_USER, username, userJsonStr);
      return !!result;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  /**
     * @description 获得用户信息
     * @param {string} username 用户名称
     * @return {Object} 用户信息
     */
  async getUser(username) {
    const userExist = await this.redis.hget(DEFAULT_REDIS_USER, username);
    if (!userExist) {
      throw new Error('用户不存在');
    }

    return JSON.parse(userExist);
  }
}

module.exports = UserService;
