'use strict';
const Service = require('egg').Service;

class OrderService extends Service {
  // 获取订单列表
  async getList() {
    return await this.app.model.Order.getList();
  }

  // 根据Id获取订单详细信息
  async getDetailById() {
    return await this.app.model.Order.getDetailById();
  }

  // 设置订单加速配置
  async setOrderSpeed() {
    await this.app.model.OrderRule.saveNew();
    await this.app.model.OrderRule.saveModify();
  }

  // 审核通过订单
  async reviewPassOrder() {
    // 获得订单信息
    await this.app.model.Order.getDetailById();

    // 更新订单信息
    await this.app.model.Order.saveModify();

    await this.discountCalculate();
  }

  // 审核拒绝订单
  async reviewRefuseOrder() {
    // 获得订单信息
    await this.app.model.Order.getDetailById();

    // 获取产品信息

    // 根据订单号获取sn列表
    await this.app.model.OrderRelatedSn.getListByOrderNo();
  }

  // 折扣产品计算
  async discountCalculate() {
    await this.app.model.Order.getDetailById();

    // 判断是否为折扣产品

    // 增加用户金额

    // 增加流水记录
  }

  // 创建订单
  async create() {}
}

module.exports = OrderService;
