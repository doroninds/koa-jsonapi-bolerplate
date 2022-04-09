import Router from 'koa-router'
import AppController from '../controllers/AppController'

const app = new Router()


app.get('/', AppController.main)
app.get('/.health-check', ctx => {
    ctx.body = { status: 'UP' }
})

app.allowedMethods()

export default app.routes()