'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/home.test.js', () => {
  it('should assert', () => {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));
  });

  it('should GET /', async () => {
    const res = await app.httpRequest().get('/').expect(200);

    assert.strictEqual(res.body.data, 'hi, egg', '返回结果错误');
  });
});
