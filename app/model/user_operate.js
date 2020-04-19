'use strict';
const moment = require('moment');

// 用户操作表
module.exports = app => {
  const { Sequelize } = app;
  const UserOperate = app.model.define('user_operate', {
    id: {
      type: Sequelize.BIGINT(11).UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      comment: '主键',
    },
    sid: {
      type: Sequelize.BIGINT(11).UNSIGNED,
      allowNull: false,
      comment: '学生Id',
    },
    keyWord: {
      type: Sequelize.STRING,
      allowNull: false,
      comment: '关键字',
    },
    level: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      default: 1,
      comment: '关键字等级:1普通，2严重，3灾难',
      get() {
        return this.getDataValue('card_level') === 1 ? '银卡' : '金卡';
      },
      create_time: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        get() {
          // TODO get created_at 无效
          return moment(this.getDataValue('create_time')).format('YYYY-MM-DD HH:mm:ss');
        },
      },
      update_time: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    },
  });

  UserOperate.associate = () => {

  };
  return UserOperate;
};
