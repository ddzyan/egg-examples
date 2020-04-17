'use strict';
const moment = require('moment');

module.exports = app => {
  const { Sequelize } = app;
  const Card = app.model.define('card', {
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
    card_name: {
      type: Sequelize.STRING,
      allowNull: false,
      comment: '卡片名称',
    },
    card_level: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      default: 1,
      comment: '卡片等级:1银卡，2金卡',
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

  Card.associate = () => {

  };
  return Card;
};