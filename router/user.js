const Router = require('koa-router');

const userRouter = new Router({
  prefix: '/user',
});

userRouter.all('*', async (ctx, next) => {
  console.log('common router');
  next();
});

userRouter.get('/', async (ctx, next) => {
  ctx.body = await ctx.render('./user/index');
  next();
});

module.exports = userRouter;