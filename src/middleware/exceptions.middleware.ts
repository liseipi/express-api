import { Request, Response, NextFunction } from 'express'
// import { exceptionsError } from '../model/index.model'

export const exceptionsHandler = (error: any, request: Request, response: Response, next: NextFunction) => {
  const { status = 500, message = 'Something Went Wrong' } = error;
  return response.status(status).send({ message })
  // if (error instanceof exceptionsError) {
  //   return response.status(error.statusCode).json(error)
  // }

  // if (error.message) {
  //   console.log(`❄ :=> ${error.message}`)
  // }

  // let statusCode: number, message: string
  //
  // switch (error.message) {
  //   case 'Unauthorized':
  //     statusCode = 401
  //     message = '请登录.'
  //     break
  //   case 'Forbidden':
  //     statusCode = 403
  //     message = '权限失败.'
  //     break
  //   default:
  //     statusCode = 500
  //     message = '服务发热了...'
  // }

  // return response.status(statusCode).send(error)

}
