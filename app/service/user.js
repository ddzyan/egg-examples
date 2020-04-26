'use strict';
// redis的相关操作，涉及到锁
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
   * @return {Promise<object>} 操作结果
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
   * @return {Promise<Object>} 用户信息
   */
  async getUser(username) {
    const userExist = await this.redis.hget(DEFAULT_REDIS_USER, username);
    if (!userExist) {
      throw new Error('用户不存在');
    }

    const res = JSON.parse(userExist);
    return res;
  }


  /**
   * @description 修改用户缓存中的money
   * @param {string} username 用户名称
   * @param {number} money 添加的金币
   * @return {number} 当前的金额
   */
  async setUserMoney(username, money) {
    const userStr = await this.redis.hget(DEFAULT_REDIS_USER, username);
    if (userStr) {
      // 加锁
      const lockKey = `money:${username}`;
      const lockValue = await this.ctx.helper.lockRedis(lockKey);
      if (!Object.is(lockValue, false)) {
        try {
          const userObj = JSON.parse(userStr);
          userObj.monery += money;
          // 检查锁是否失效
          const newLockValue = await this.ctx.helper.getLockValue(lockKey);
          // 保证锁未失效
          if (Object.is(newLockValue, lockValue)) {
            await this.redis.hset(DEFAULT_REDIS_USER, username, JSON.stringify(userObj));
            await this.ctx.helper.unlockRedis(lockKey, lockValue);
            return userObj;
          }
          await this.ctx.helper.unlockRedis(lockKey);
          throw new Error('执行超时，请重试');
        } catch (error) {
          // 出现异常，必须解除锁定，从而提高并发量
          await this.ctx.helper.unlockRedis(lockKey);
          throw error;
        }
      } else {
        throw new Error('请重试');
      }
    }
    throw new Error('用户不存在');
  }
}

module.exports = UserService;
