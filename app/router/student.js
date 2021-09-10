module.exports = app => {
  const subRouter = app.router.namespace('/student');
  subRouter.get('/:id', app.controller.student.get);
};
