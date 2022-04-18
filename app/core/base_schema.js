'use strict';

const uuidv1 = require('uuid/v1');

function generateUUID() {
  return uuidv1().replace(/-/g, '');
}

function defineModel(app, attributes) {
  const { UUID } = app.Sequelize;

  const attrs = {};
  for (const key in attributes) {
    const value = attributes[key];
    if (typeof value !== 'object') {
      throw new TypeError('数据库表结构必须定义为Object类型');
    }

    if (!value.comment) {
      throw new Error('数据库表结构必须包含Comment');
    }
    value.allowNull = value.allowNull && false;
    attrs[key] = value;
  }

  attrs.id = {
    type: UUID,
    primaryKey: true,
    defaultValue: () => {
      return generateUUID();
    },
  };

  return attrs;
}

module.exports = { defineModel };
