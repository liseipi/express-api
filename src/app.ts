import express, { Express } from 'express'
import cors from 'cors'

import router from './routes/routes.index'
import { exceptionsHandler, validationHandler } from './middleware/index.middleware'
import { corsOptions } from './config/index.config'

export const createApp = () => {
  const app: Express = express()

  app.use(cors(corsOptions))

  app.use(express.json()) // 解析json请求
  app.use(express.urlencoded({ extended: false })) // 解析URL-encoded请求

  app.use('/api', router)

  app.use(validationHandler)
  app.use(exceptionsHandler)

  return app
}