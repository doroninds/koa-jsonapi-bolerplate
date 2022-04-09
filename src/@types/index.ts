import { DefaultContext, ParameterizedContext } from 'koa'

export type ApplicationState = {
  auth: boolean
}

export type ExtensionContext = {}

export type Context = ParameterizedContext<ApplicationState, DefaultContext & ExtensionContext>
