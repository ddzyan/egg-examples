'use strict';
// 请求和返回日志输出
module.exports = () => {
  return async function requestHandle(ctx, next) {
    const startTime = Date.now();
    try {
      // 请求参数，traceId
      const { method, request } = ctx;
      const requestParam = JSON.stringify(method.toUpperCase() === 'POST' ? request.body : request.query);
      ctx.logger.info(`request begin||param:${requestParam}||traceId:${ctx.getTraceId()}`);
      await next();
    } catch (error) {
      let errorStr = '';
      if (error instanceof Error) {
        const { stack, message } = error;
        errorStr = `${message} `;
        errorStr += `${stack}`;
      } else {
        errorStr = error;
      }
      ctx.logger.error(`request error||traceId:${ctx.getTraceId()}||${errorStr}`);
    } finally {
      const { request: { body }, status } = ctx;
      ctx.logger.info(`request end ${Date.now() - startTime}ms||status:${status}||body:${JSON.stringify(body)}||traceId:${ctx.getTraceId()}`);
    }
  };
};
