import { mysqlConnection } from '../../config/mysql.config'

export const getProfile = async (aid: number) => {
    let statement = `
    SELECT 
      id,
      full_name,
      aid
    FROM a_admin_profile
    WHERE aid = ?
  `
    const [data] = await mysqlConnection.promise().query(statement, aid)
    let result = data as any
    return result[0]
}