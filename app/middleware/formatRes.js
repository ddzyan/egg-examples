'use strict';

// 统一返回结果
module.exports = () => {
  return async function formatRes(ctx, next) {
    try {
      await next();
      // koa 底层只要对body设置了值，则status就等于200
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
          data: {},
          message: '404',
          success: false,
          code: 0,
        };
      }
    } catch (error) {
      ctx.body = {
        data: {},
        message: '系统错误',
        success: false,
        code: 2,
      };
      throw error;
    }
  };
};
