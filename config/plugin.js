'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  sequelize: {
    enable: false,
    package: 'egg-sequelize',
  },
  redis: {
    enable: false,
    package: 'egg-redis',
  },
};
