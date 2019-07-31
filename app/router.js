'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // router.all('/api/*', controller.home.proxy);
  router.get('/api/currentUser', controller.user.currentUser);
  router.get('/api/fake_chart_data', controller.chart.getData);
  router.get('*', controller.home.index);
};
