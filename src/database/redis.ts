import { redisClient } from '../config/index.config'

const redisDatabase = async () => {
  await redisClient.on('error', err => console.log('Redis 连接 Error', err))
  await redisClient.on('connect', () => {console.log('Redis 连接 Success.')})

  // redisClient.on('error', err => console.error('client error', err));
  // redisClient.on('connect', () => console.log('client is connect'));
  // redisClient.on('reconnecting', () => console.log('client is reconnecting'));
  // redisClient.on('ready', () => console.log('client is ready'));

  await redisClient.connect()
}

export default redisDatabase