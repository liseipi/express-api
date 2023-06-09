import { mysqlConnection } from '../../config/mysql.config'

export const LoginUser = async (email: string) => {
  let statement = `
    SELECT 
      id,
      email,
      password
    FROM a_admin
    WHERE email = ?
  `
  const [data] = await mysqlConnection.promise().query(statement, email)
  let result = data as any
  return result[0]
}

export const getUserByEmail = async (email: string) => {
  let statement = `
    SELECT 
      id,
      email
    FROM a_admin
    WHERE email = ?
  `
  const [data] = await mysqlConnection.promise().query(statement, email)
  let result = data as any
  return result[0]
}

export const registerUser = async (email: string, password: string) => {
  let statement = `INSERT a_admin SET ?`
  const [data] = await mysqlConnection.promise().query(statement, { email, password })
  return data
}

export const saveProfile = async (aid: number, full_name: string) => {
  let statement = `INSERT a_admin_profile SET ?`
  const [data] = await mysqlConnection.promise().query(statement, { aid, full_name })
  return data
}