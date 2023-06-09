import mysql from 'mysql2'

const {
  MYSQL_HOST = 'localhost',
  MYSQL_PORT = 3306,
  MYSQL_USER = '',
  MYSQL_PASSWORD = '',
  MYSQL_DATABASE = ''
} = process.env

// create the connection to database
export const mysqlConnection = mysql.createPool({
  host: MYSQL_HOST.toString(),
  port: Number(MYSQL_PORT),
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE
})