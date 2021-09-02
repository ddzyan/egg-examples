'use strict';
// 订单信息表
module.exports = app => {
  const orderRuleSchema = require('../schema/order_rule')(app);
  // 定义表模型
  const OrderRule = app.model.define('orderRule', orderRuleSchema);

  // 创建表间关系
  OrderRule.associate = () => {};

  // 创建订单加速配置信息
  OrderRule.saveNew = async () => {};

  // 更新订单加速配置信息
  OrderRule.saveModify = async () => {};

  return OrderRule;
};
