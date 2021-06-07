'use strict';

const { Service } = require('egg');

class BaseDaoService extends Service {
  async addRecord(params, option) {
    const res = await this.model.create(params, option);
    return res;
  }

  async getOneRecord(where, attributes) {
    const res = await this.model.findOne({
      where,
      attributes,
      raw: true,
    });

    return res;
  }
}

module.exports = BaseDaoService;
