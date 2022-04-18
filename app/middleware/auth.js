'use strict';

/**
 * 判断是否登录
 * @return {null} null
 */
module.exports = () => {
  return async function auth(ctx, next) {
    // 过滤登录接口和验证token
    const ignorePaths = [ '/user/login', '/user/logout' ];
    const valid = await ctx.verifyToken();
    if (valid || ignorePaths.includes(ctx.path)) {
      await next();
    }
  };
};
