'use strict';

// helper 扩张

module.exports = {
  /**
  * @description redis加锁
  * @param {string} key 加锁key
  * @param {number} [expire=60]  - 过期时间，防止死锁
  * @return {boolean} true 加锁成功，false加锁失败
  */
  async lock(key, expire = 60) {
    const { app } = this;
    const lcokKey = `LOCK:${key}`;
    // TODO 需要修改为setnx，实现原子操作，并且在删除锁的时候比对值，避免互斥锁
    const lockStatus = await app.redis.incr(lcokKey);
    if (lockStatus > 1) {
      // 判断锁的过期时间是否有效
      const lockExpire = await app.redis.ttl(lcokKey);
      if (lockExpire < 0) {
        await app.redis.expire(lcokKey, expire);
      }
      // 加锁失败
      return false;
    }
    // 加锁成功
    return true;
  },

  /**
   * @description redis解锁
   * @param {string} key 解锁key
   */
  async unlock(key) {
    const { app } = this;
    const lockKey = `LOCK:${key}`;
    const result = await app.redis.del(lockKey);
    return result;
  },
};
