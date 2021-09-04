'use strict';
// 用户表
module.exports = app => {
  const studentSchema = require('../schema/student')(app);
  // 定义表模型
  const Student = app.model.define('student', studentSchema);

  // 创建表间关系
  Student.associate = () => {};

  Student.get = async ({ id, attributes }) => {
    return await Student.findOne({
      attributes,
      where: { id },
    });
  };

  Student.saveNew = async student => {
    const result = await Student.create(student);
    return result.id;
  };

  return Student;
};
