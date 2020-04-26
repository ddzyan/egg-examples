'use strict';

module.exports = {
  getTraceId() {
    // this 就是 ctx 对象，在其中可以调用 ctx 上的其他方法，或访问属性
    return this.traceId ? this.traceId : this.helper.getRandom();
  },
};
