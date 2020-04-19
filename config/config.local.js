/* eslint valid-jsdoc: "off" */

'use strict';

module.exports = () => {
  const config = {};
  config.sqlMaxTime = 500;
  // mysql 配置
  config.sequelize = {
    host: '192.168.31.141',
    port: 3306,
    username: 'test',
    password: '123456',
    // transactionType: '', // 设置默认事务类型
    // isolationLevel: '', // 设置事物隔离级别
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.redis = {
    client: {
      port: 6379, // Redis port
      host: '127.0.0.1', // Redis host
      password: '',
      db: 0,
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
