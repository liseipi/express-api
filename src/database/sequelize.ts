import { Sequelize } from 'sequelize'

const {
  MYSQL_HOST = 'localhost',
  MYSQL_PORT = 3306,
  MYSQL_USER = '',
  MYSQL_PASSWORD = '',
  MYSQL_DATABASE = ''
} = process.env

export const sequelize = new Sequelize(
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD,
  {
    host: MYSQL_HOST.toString(),
    dialect: 'mysql',
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
)

export const sequelizeInit = async () => {
  try {
    await sequelize.authenticate()
    console.log('Sequelize 已连接.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}