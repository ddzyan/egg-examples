module.exports = app => {
  const subRouter = app.router.namespace('/student');
  subRouter.get('/', app.controller.student.get);
};
