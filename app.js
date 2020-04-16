'use strict';

class AppBootHook {
  constructor(app) {
    this.app = app;
  }

  configWillLoad() {
    // Ready to call configDidLoad,
    // Config, plugin files are referred,
    // this is the last chance to modify the config.
    // 每次日志输出都会调用的函数，可以在此进行重写
    this.app.config.sequelize.logging = (sql, timing) => {
      // 每次日志输出都会调用的函数，可以在此进行重写
      if (typeof timing === 'number' && timing > this.app.config.sqlMaxTime) {
        // 记录执行时间超过阈值的sql
        this.app.logger.warn(`[egg-sequelize](${timing} ms) ${sql}`);
      }
    };
  }

  configDidLoad() {
    // Config, plugin files have been loaded.
  }

  async didLoad() {
    // All files have loaded, start plugin here.
  }

  async willReady() {
    // All plugins have started, can do some thing before app ready
  }

  async didReady() {
    // Worker is ready, can do some things
    // don't need to block the app boot.
  }

  async serverDidReady() {
    // Server is listening.
  }

  async beforeClose() {
    // Do some thing before app close.
  }
}

module.exports = AppBootHook;
