import { createClient } from 'redis'

const {
  REDIS_HOST = 'localhost',
  REDIS_PORT = 6379,
  REDIS_PASSWORD = '',
  REDIS_BUFFERS = true
} = process.env
const options = {
  legacyMode: true,
  socket: {
    host: REDIS_HOST as string,
    port: REDIS_PORT as number
  },
  password: REDIS_PASSWORD
}

export const redisClient = createClient(options)