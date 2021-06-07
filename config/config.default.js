/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1587004221316_6644';

  // add your middleware config here
  config.middleware = [ 'requestHandle', 'formatRes' ];

  config.sequelize = {
    dialect: 'mysql', // 数据库类型
    host: '127.0.0.1',
    port: 3306,
    database: 'demo',
    username: 'root',
    password: '123456',
    timezone: '+08:00', // 将日期从数据库转换为JavaScript日期时使用的时区。
    benchmark: true, // 将查询执行时间（以毫秒为单位）作为日志记录功能的第二个参数(options.logging)。
    define: {
      timestamps: false, // 是否创建updatedAt, createdAt列
      paranoid: false, //  删除时不删除数据，而更新deleteAt
      underscored: true, // 不使用驼峰法自动添加属性，而是用_
      freezeTableName: true, // 不是用复数表名
      charset: 'utf8mb4', // 字符集
      dialectOptions: {
        collate: 'utf8mb4_general_ci', // 排序方式 general_ci 不区分大小写
      },
    },
    pool: {
      // 连接池属性
      max: 5, // 最大连接数
      min: 0, // 最小连接数
    },
  };
  config.redis = {};
  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.logger = {
    consoleLevel: 'DEBUG',
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
