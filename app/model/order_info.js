'use strict';
// 订单信息表
module.exports = app => {
  const orderInfoSchema = require('../schema/order_info')(app);
  // 定义表模型
  const OrderInfo = app.model.define('orderInfo', orderInfoSchema);

  // 创建表间关系
  OrderInfo.associate = () => {};

  // 获取订单列表信息
  OrderInfo.saveModify = async () => {};

  // 获取订单列表信息
  OrderInfo.getList = async () => {};

  // 根据订单id获取订单详情
  OrderInfo.getDetailById = async () => {};

  return OrderInfo;
};
