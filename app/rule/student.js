'use strict';
// https://github.com/node-modules/parameter
module.exports = {
  createRule: {
    username: {
      type: 'string',
      required: true,
      trim: true,
    },
    type: {
      type: 'enum',
      values: [ 1, 2, 3 ],
    },
    status: {
      type: 'number',
      required: false,
      default: 1,
    },
  },
  queryRule: {
    id: {
      type: 'string',
      // convertType: "string",
      required: true,
    },
  },
};
