'use strict';

const Controller = require('../core/base_controller');

class OrderController extends Controller {
  // 获取订单列表
  async getList() {
    const result = await this.ctx.service.order.getList();
    this.success(result);
  }

  // 获取订单详情
  async getDetailByOrderNo() {
    const result = await this.ctx.service.order.getDetailById();
    this.success(result);
  }

  // 设置订单加速
  async setSpeed() {
    const result = await this.ctx.service.order.setOrderSpeed();
    this.success(result);
  }

  // 审核订单
  async setReviewStatus() {
    // 审核
    await this.ctx.service.order.reviewOrder();

    // 拒绝
  }

  // 确认订单支付
  async setPayStatus() {}

  // 导出表格
  async getExcel() {}

  // 获取联合挖矿订单
  async getJointList() {}

  // 获取算力包活动列表
  async getMarketingList() {}

  // 获取客户端算力包活动订单列表
  async getActivityPowerList() {}

  async getDepositDueToRemind() {}

  // 获取托管费到期订单列表
  async getOrderListByCustodyDue() {}

  // 获取设备详情
  async getDeviceDetail() {}

  // 获取扩容订单详情
  async getCapacityDetail() {}

  // 支付订单扩容费用
  async payCapacity() {}

  // 获取订单存力增长记录
  async getSectorRecord() {}

  // 订单冻结加速
  async setFreeze() {}

  // 暂停/原速封存
  async setStatus() {}

  // 订单扇区类型转换
  async setSectorType() {}
}

module.exports = OrderController;
