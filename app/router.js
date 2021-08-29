"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  router.get("/", controller.home.index);
  router.post("/student", controller.student.create);
  router.get("/student/:id", controller.student.get);

  router.post("/user/login", controller.user.login);
  router.post("/user/logout", controller.user.logout);
};
