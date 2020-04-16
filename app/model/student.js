'use strict';
const moment = require('moment');

module.exports = app => {
  const { Sequelize } = app;
  // 定义表模型
  const Student = app.model.define('student',
    {
      id: {
        type: Sequelize.BIGINT(11).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        comment: '主键',
      },
      student_name: {
        type: Sequelize.STRING(10),
        allowNull: false,
        comment: '学生名称',
        set(student_name) {
        // 转换为小写
          this.setDataValue('student_name', student_name.toString().toLowerCase());
        },
      },
      student_type: {
        type: Sequelize.INTEGER(1).UNSIGNED,
        allowNull: false,
        comment: '学生类型:1小学生，2中学生',
      },
      status: {
        type: Sequelize.BOOLEAN, // 1返回true，0返回false
        allowNull: false,
        default: 1,
        comment: '状态值:1启用 0 关闭',
      },
      created_at: {
        type: Sequelize.DATE,
        get() {
          return moment(this.getDataValue('created_at')).format('YYYY-MM-DD HH:mm:ss');
        },
      },
    }, {
      timestamps: false,
    }
  );

  // 创建表间关系
  Student.associate = () => {
    // app.model.Student.belongsTo(app.model.StudentInfo, { foreignKey: 'sid' });
    // 由于是将student的主键，保存到studentInfo中，所以要用hasOne，foreignKey是添加到studentInfo中的外键名称
    app.model.Student.hasOne(app.model.StudentInfo, { foreignKey: 'sid' });
  };

  return Student;
};
