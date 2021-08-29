"use strict";
const Service = require("egg").Service;

class StudentService extends Service {
  async saveNew(params = {}) {
    const { app } = this;
    const { username, type, status } = params;
    return await app.model.Student.saveNew({ username, type, status });
  }

  async get(id) {
    const { app } = this;
    return await app.model.Student.get({
      id,
      attributes: ["username", "type", "status", "createdTime"],
    });
  }
}

module.exports = StudentService;
