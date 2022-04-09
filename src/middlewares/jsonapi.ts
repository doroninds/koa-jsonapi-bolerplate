import { Context } from '../@types'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { version, name } = require('../../package.json')

export default async (ctx: Context, next: () => Promise<void>): Promise<void> => {
  try {
    await next()
    ctx.body = decorate(ctx.body)
    ctx.status = ctx.body ? 200 : 204
  } catch (e: any) {
    ctx.body = decorate(null, e)
    ctx.status = e.status || 500
  }
}

function decorate(data: unknown | null, e: Error | null = null) {
  return {
    jsonapi: {
      version,
    },
    data,
    error: e ? { originError: e, message: e.message, stack: e.stack } : null,
    meta: {
      NODE_ENV: process.env.NODE_ENV || null,
      service_name: name,
    },
  }
}
