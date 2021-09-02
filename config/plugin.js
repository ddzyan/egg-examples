'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
  redis: {
    enable: false,
    package: 'egg-redis',
  },
  validate: {
    enable: true,
    package: 'egg-validate',
  },
  jwt: {
    enable: true,
    package: 'egg-jwt',
  },
  routerPlus: {
    enable: true,
    package: 'egg-router-plus',
  },
};
