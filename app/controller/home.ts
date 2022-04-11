import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }
  public async redis(){
    const { ctx } = this;
    const body=ctx.request.body;
  //  const redis= ctx.app.redis;
  
    Object.keys(body).map((keys:string)=>{
      console.log(`${keys}: ${body[keys]}`);
      //redis.set(keys,body[keys]);
      //redis.expire(keys,60);
    })
    console.log(body)
   // ctx.app.redis.set()
  }
}
