'use strict'
const moment = require('moment')

// 用户表
module.exports = app => {
  const { Sequelize } = app
  // 定义表模型
  const User = app.model.define('user', {
    id: {
      type: Sequelize.BIGINT(11).UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      comment: '主键',
    },
    username: {
      type: Sequelize.STRING(10),
      allowNull: false,
      comment: '用户名称',
      set(student_name) {
        // 转换为小写
        this.setDataValue('student_name', student_name.toString().toLowerCase())
      },
    },
    type: {
      type: Sequelize.INTEGER(1).UNSIGNED,
      allowNull: false,
      comment: '类型:1小学生，2中学生',
    },
    status: {
      type: Sequelize.BOOLEAN, // 1返回true，0返回false
      allowNull: false,
      default: 1,
      comment: '状态值:1启用 0 关闭',
    },
    create_time: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      get() {
        return moment(this.getDataValue('create_time')).format('YYYY-MM-DD HH:mm:ss')
      },
    },
    update_time: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
  })

  // 创建表间关系
  User.associate = () => {
    // app.model.Student.belongsTo(app.model.StudentInfo, { foreignKey: 'sid' });
    // 由于是将student的主键，保存到studentInfo中，所以要用hasOne，foreignKey是添加到studentInfo中的外键名称
    app.model.User.hasOne(app.model.UserOperate, { foreignKey: 'sid' })
  }

  return User
}
