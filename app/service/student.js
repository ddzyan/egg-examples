'use strict';

const Service = require('egg').Service;

class StudentService extends Service {
  async getAllStudent() {
    const res = this.ctx.service.dao.student.getAllStudent();
    return res;
  }

  async addStudent({ student_name, student_type, card_name, card_level }) {
    const { ctx, app: { Sequelize } } = this;
    // 判断账号是否已经存在，然后再开启事务进行保存
    const studentInfo = await ctx.service.dao.student.getStudentByStudentName(student_name);
    if (!studentInfo) {
      const t = await this.ctx.model.transaction({ isolationLevel: Sequelize.Transaction.ISOLATION_LEVELS.SERIALIZABLE });
      try {
        // 创建学生
        const row1 = await ctx.service.dao.student.add({ student_name, student_type }, t);
        // 创建卡片
        if (row1 && row1.id) {
          const row2 = await ctx.service.dao.card.add({ card_name, card_level, sid: row1.id }, t);
          if (row2 && row2.id) {
            await t.commit();
            return true;
          }
          throw new Error('card create error');

        } else {
          throw new Error('student create error');
        }
      } catch (error) {
        // 事务处理失败
        await t.rollback();
        throw error;
      }
    } else {
      throw new Error('账号已经存在');
    }
    // 开启事务操作,设置隔离级别为串行化的，在事务未完成之前，其他事务无法进行操作

  }
}

module.exports = StudentService;
