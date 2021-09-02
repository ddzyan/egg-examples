module.exports = app => {
  const subRouter = app.router.namespace('/order');
  // 获取订单列表
  subRouter.get('/list', app.controller.order.getList);

  // 根据订单号获取订单详情
  subRouter.get('/detail/:orderNo', app.controller.order.getDetailByOrderNo);

  // 订单加速
  subRouter.post('/speed', app.controller.order.setSpeed);

  // 审核订单(通过/拒绝)
  subRouter.post('/review', app.controller.order.setReviewStatus);

  // 确认支付
  subRouter.post('/confirm/pay', app.controller.order.setPayStatus);

  // 导出表格
  subRouter.post('/export', app.controller.order.getExcel);

  // 获取联合挖矿订单
  subRouter.post('/joint', app.controller.order.getJointList);

  // 算力包活动列表
  subRouter.get('/marketing/power', app.controller.order.getMarketingList);

  // 获取客户端算力包活动订单列表
  subRouter.get('/activity/power', app.controller.order.getActivityPowerList);

  // 订单托管费到期提醒
  subRouter.get('/deposit/remind', app.controller.order.getDepositDueToRemind);

  // 需要支付托管费的订单列表
  subRouter.get('/deposit/remind', app.controller.order.getDepositDueToRemind);

  // 获取设备详情
  subRouter.get('/device', app.controller.order.getDeviceDetail);

  // 获取扩容设备详情
  subRouter.get('/capacity/detail', app.controller.order.getCapacityDetail);

  // 支付订单扩容费
  subRouter.get('/pay/capacity', app.controller.order.payCapacity);

  // 订单存力增长记录
  subRouter.get('/sector', app.controller.order.getSectorRecord);

  // 订单冻结加速
  subRouter.put('/status/freeze', app.controller.order.setFreeze);

  // 暂停/原速封存
  subRouter.put('/status', app.controller.order.setStatus);

  // 转换扇区
  subRouter.put('/status/sectorType', app.controller.order.setSectorType);
};
