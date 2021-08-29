'use strict';

// helper 扩张

module.exports = {
  // 返回一个随机数
  getRandom() {
    return Math.floor(Math.random() * 100000 + 1);
  },

  /**
   * @description redis加锁
   * @param {string} key 加锁key
   * @param {number} [expire=60]  - 过期时间，防止死锁
   * @return {string|boolean} true 加锁成功，false加锁失败
   */
  async lockRedis(key, expire = 60) {
    const { app } = this;
    const lockValue = Date.now().toString();
    const lockKey = `LOCK:${key}`;
    // TODO 需要修改为setnx，实现原子操作，并且在删除锁的时候比对值，避免互斥锁
    const lockStatus = await app.redis.setnx(lockKey, lockValue);
    // 0 加锁失败
    if (Object.is(lockStatus, 0)) {
      // 判断锁的过期时间是否有效
      const lockExpire = await app.redis.ttl(lockKey);
      if (lockExpire < 0) {
        await app.redis.expire(lockKey, expire);
      }
      // 加锁失败
      return false;
    }
    // 加锁成功
    return lockValue;
  },

  /**
   * @description 获取锁定的时候传入的value
   * @param {string} key 锁key
   * @return {string} 锁value
   */
  async getLockValue(key) {
    const lockKey = `LOCK:${key}`;
    const lockValue = await this.app.redis.get(lockKey);
    return lockValue;
  },

  /**
   * @description redis解锁
   * @param {string} key 解锁key
   */
  async unlockRedis(key) {
    const lockKey = `LOCK:${key}`;
    await this.app.redis.del(lockKey);
  },

  // 字符串转对象，转换出错返回{}或者默认值
  JSONParse(str, defaultResult) {
    try {
      return JSON.parse(str);
    } catch (e) {
      return defaultResult || {};
    }
  },
};
