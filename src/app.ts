import Koa from 'koa'
import ENV from './config/env'
import middlewares from './middlewares'
import routes from './routes'
import { logger } from './utils/logger'

const port = ENV.APP_PORT
const app = new Koa()

app.use(middlewares.jsonapi).use(middlewares.auth).use(routes)

app.listen(port, () => {
  logger.info(`🚀 Server started on http://localhost:${port}`)
})
