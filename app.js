'use strict';
class AppBootHook {
  constructor(app) {
    this.app = app;
  }

  configWillLoad() {
    // 每次日志输出都会调用的函数，可以在此进行重写
    this.app.config.sequelize.logging = (sql, timing) => {
      // 每次日志输出都会调用的函数，可以在此进行重写
      if (typeof timing === 'number' && timing > this.app.config.sqlMaxTime) {
        // 记录执行时间超过阈值的sql
        this.app.logger.warn(`[egg-sequelize](${timing} ms) ${sql}`);
      }
    };
  }
}

module.exports = AppBootHook;
