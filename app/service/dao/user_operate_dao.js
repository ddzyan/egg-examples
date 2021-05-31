'use strict'

const BaseDaoService = require('./base_dao')

class UserOperateService extends BaseDaoService {
  constructor(ctx) {
    super(ctx)
    this.model = ctx.model.UserOperate
  }
}

module.exports = UserOperateService
