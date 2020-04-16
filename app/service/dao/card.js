'use strict';

const Service = require('egg').Service;

class CardService extends Service {
  constructor(ctx) {
    super(ctx);
    this.model = ctx.model.Card;
  }

  async add({ card_name, card_level, sid }, t) {
    const res = await this.model.create({
      card_name, card_level, sid,
    }, {
      transaction: t,
    });
    return res;
  }
}

module.exports = CardService;
