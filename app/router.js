'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/student/all', controller.student.getAllStudentInfo);
  router.post('/student/add', controller.student.add);

  router.post('/saveUser', controller.user.saveUser);
  router.get('/getUser', controller.user.getUser);
  router.post('/setUserMoney', controller.user.setUserMoney);
};
