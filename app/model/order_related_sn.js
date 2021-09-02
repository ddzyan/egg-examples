'use strict';
// 订单信息表
module.exports = app => {
  const orderRelatedSnSchema = require('../schema/order_related_sn')(app);
  // 定义表模型
  const orderRelatedSn = app.model.define(
    'orderRelatedSn',
    orderRelatedSnSchema
  );

  // 创建表间关系
  orderRelatedSn.associate = () => {};

  orderRelatedSn.getListByOrderNo = async () => {};

  return orderRelatedSn;
};
