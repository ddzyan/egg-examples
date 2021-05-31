'use strict'

const BaseDaoService = require('./base_dao')

class UserService extends BaseDaoService {
  constructor(ctx) {
    super(ctx)
    this.model = ctx.model.User
  }

  // 获取学生所有信息，关联查询student和studentInfo
  async getAllStudent() {
    try {
      const { ctx } = this
      const studentArray = await this.model.findAll({
        where: {
          status: true,
        },
        include: [
          {
            model: ctx.model.Card,
            attributes: ['card_name', 'card_level'],
          },
        ],
        attributes: ['id', 'student_name', 'student_type', 'create_time'],
      })

      const newStudentArray = studentArray.map(item => {
        const {
          id,
          student_name,
          student_type,
          create_time,
          card: { card_name, card_level },
        } = item.dataValues

        return { id, student_name, student_type, card_name, card_level, create_time }
      })
      return newStudentArray
    } catch (error) {
      console.error('getStudentInfo', error)
      throw error
    }
  }

  async getStudentByStudentName(student_name) {
    const res = await this.model.findOne({
      where: {
        student_name,
      },
    })

    return res
  }
}

module.exports = UserService
