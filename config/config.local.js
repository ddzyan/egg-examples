/* eslint valid-jsdoc: "off" */

'use strict';

module.exports = appInfo => {
  const config = {};

  // mysql 配置
  config.sequelize = {
    dialect: 'mysql', // 数据库类型
    host: '192.168.31.141',
    port: 3306,
    database: 'egg_sequelize_test_demo',
    username: 'test',
    password: '123456',
    logging: (sql, timing) => {
      // 每次日志输出都会调用的函数，可以在此进行重写
      if (typeof timing === 'number' && timing > 500) {
        // 记录执行时间超过阈值的sql
        appInfo.logger.info(`[egg-sequelize](${timing} ms) ${sql}`);
      }
    },
    timezone: '+08:00', // 将日期从数据库转换为JavaScript日期时使用的时区。
    benchmark: true, // 将查询执行时间（以毫秒为单位）作为日志记录功能的第二个参数(options.logging)。
    define: {
      timestamps: true, // 是否创建updatedAt, createdAt列
      paranoid: false, //  删除时不删除数据，而更新deleteAt
      underscored: true, // 不使用驼峰法自动添加属性，而是用_
      freezeTableName: true, // 不是用复数表名
      charset: 'utf8mb4', // 字符集
      dialectOptions: {
        collate: 'utf8mb4_general_ci', // 排序方式 general_ci 不区分大小写
      },
    },
    pool: {// 连接池属性
      max: 5, // 最大连接数
      min: 0, // 最小连接数
    },
    // transactionType: '', // 设置默认事务类型
    // isolationLevel: '', // 设置事物隔离级别
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
