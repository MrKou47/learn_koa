const Koa = require('koa');
const static = require('koa-static');
const co = require('co');
const fs = require('fs');
const path = require('path');
const Router = require('koa-router');
const swigRender = require('koa-swig');

const userRouter = require('./router/user.js');
const hostConfig = require('./config/host.js');

const app = new Koa();
const { PORT } = hostConfig.dev;

app.context.render = co.wrap(swigRender({
  root: path.join(__dirname, './views'),
  autoescape: true,
  cache: 'memory',
  ext: 'swig',
}));

const basicRouter = new Router();

app.use(static(path.join(__dirname, './')));


function readFileAsync(path, type = 'utf-8') {
  return new Promise((resolve, reject) => {
    fs.readFile(path, type, (err, result) => {
      if(err) reject(err);
      resolve(result);
    });
  });
}


// app.use(async ctx => {
//   ctx.body = 'hello world';
// });

basicRouter.get('/', async (ctx, next) => {
  const file = await readFileAsync(path.join(__dirname, './mock/user_info.json'));
  console.log(file);
  ctx.body = await ctx.render('index');
  next();
});

app.use(basicRouter.routes());
app.use(userRouter.routes());

app.listen(PORT, () => {
  console.log(`koa has listening on port ${PORT}`);
})