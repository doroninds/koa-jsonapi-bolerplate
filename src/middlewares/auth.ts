import { Context } from '../@types'
import ENV from '../config/env'
import { NotAuthorizedError, InvalidTokenError } from '../config/errors'

const SKIP_URL_PATHNAMES = ['', '/', '/.health-check', '/favicon.ico']
export default async (ctx: Context, next: () => Promise<void>): Promise<void> => {
  if (ENV.APP_AUTH_TOKEN && SKIP_URL_PATHNAMES.indexOf(ctx.request.URL.pathname) === -1) {
    console.log('ctx.request.URL.pathname', ctx.request.URL.pathname)
    ctx.state.auth = false

    if (!ctx.header.authorization) {
      throw new NotAuthorizedError()
    }

    if (ctx.header.authorization !== ENV.APP_AUTH_TOKEN) {
      throw new InvalidTokenError()
    }

    ctx.state.auth = true

    await next()
  } else {
    await next()
  }
}
