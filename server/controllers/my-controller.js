'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('app-information')
      .service('myService')
      .getWelcomeMessage();
  },
};
