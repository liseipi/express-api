import mysql from 'mysql2'
import { mysqlConnection } from '../config/mysql.config'

const mysqlDatabase = async () => {
  await mysqlConnection.getConnection((err, con) => {
    if (err) {
      console.log('数据库连接失败..')
      console.log(err)
      return
    }
    console.log('MYSQL 连接 Success.')
  })
}

export default mysqlDatabase