require('dotenv').config()
import { APP_PORT } from './config/index.config'
import { createApp } from './app'
import mysqlDatabase from './database/mysql'
import redisDatabase from './database/redis'
import { sequelizeInit } from './database/sequelize'

(async () => {
  await mysqlDatabase()
  // await redisDatabase()
  // await sequelizeInit()

  // const RedisStore = connectRedis(session)
  // const client = new Redis(REDIS_OPTIONS)
  // const store = new RedisStore({ client })
  // const app = createApp(store)

  const app = createApp()

  app.listen(APP_PORT, () => console.log(`http://localhost:${APP_PORT}`))
})()