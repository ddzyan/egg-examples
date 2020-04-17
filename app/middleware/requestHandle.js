'use strict';

module.exports = () => {
  return async function requestHandle(ctx, next) {
    try {
      await next();
      const { status, body } = ctx;
      if (Object.is(status, 200)) {
        ctx.body = {
          data: body,
          message: '',
          success: true,
          code: 1,
        };
      } else {
        ctx.body = {
          data: null,
          message: '404',
          success: false,
          code: 0,
        };
      }
    } catch (error) {
      console.error(error);
      ctx.body = {
        data: null,
        message: '系统错误',
        success: false,
        code: 2,
      };
    }
  };

};