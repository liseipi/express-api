require('dotenv').config()

export const {
    NODE_ENV = 'development',
    APP_PORT = 3000,
    SECRET = ''
} = process.env

