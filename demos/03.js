//ipos de respuesta HTTP

const Koa = require('koa');
const app = new Koa();

const main = ctx => {
  if (ctx.request.accepts('xml')) {
    ctx.response.type = 'xml';
    ctx.response.body = '<data>Hello World</data>';
  } 
  if (ctx.request.accepts('json')) {
    ctx.response.type = 'json';
    ctx.response.body = { data: 'Hello World' };
  } 
  if (ctx.request.accepts('html')) {
    ctx.response.type = 'html';
    ctx.response.body = '<p>Hello World</p>';
  } 
  if (ctx.request.accepts('text')) {
    ctx.response.type = 'text';
    ctx.response.body = 'Hello World';
  }
};

app.use(main);
app.listen(3000);
