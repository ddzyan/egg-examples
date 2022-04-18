'use strict';
const fs = require('fs');
const path = require('path');
const folderPath = path.join('./', 'app/schema');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      const files = fs.readdirSync(folderPath);

      // 初始化数据库
      for (const fileName of files) {
        const filePath = path.join('../../app/schema/', fileName);
        const schema = require(filePath)({ Sequelize });
        await queryInterface.createTable(fileName.replace('.js', ''), schema);
      }
    } catch (error) {
      console.log(error);
    }
  },

  down: async queryInterface => {
    await queryInterface.dropAllTables();
  },
};
