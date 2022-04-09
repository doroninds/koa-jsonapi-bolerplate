import { Context } from 'koa'

export default class AppController {
  public static async main(ctx: Context) {
    ctx.body = 'Koa.js JSONAPI boilerplate'
  }
}
