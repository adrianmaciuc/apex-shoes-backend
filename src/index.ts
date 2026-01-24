import type { Core } from "@strapi/strapi";

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }: { strapi: Core.Strapi }) {
    // Add middleware to validate secret key before registration
    strapi.server.use(async (ctx, next) => {
      if (ctx.path === '/auth/local/register' && ctx.method === 'POST') {
        const { secretKey } = ctx.request.body;
        const validSecretKey = process.env.REGISTRATION_SECRET_KEY;
        
        if (!secretKey || secretKey !== validSecretKey) {
          ctx.status = 400;
          ctx.body = {
            error: {
              status: 400,
              name: 'ValidationError',
              message: 'SECRET_KEY_INVALID'
            }
          };
          return;
        }
        
        // Remove secretKey from request body before processing
        delete ctx.request.body.secretKey;
      }
      
      await next();
    });
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/* { strapi }: { strapi: Core.Strapi } */) {},
};
