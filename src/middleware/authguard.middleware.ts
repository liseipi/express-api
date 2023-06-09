import {Request, Response, NextFunction} from 'express'
import jwt from 'jsonwebtoken'
import {AppError} from '../model/index.model'
import {SECRET} from "../config/app.config";

export const authGuard = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const authorization = request.header('Authorization')
        if (!authorization) {
            return response.status(401).send({message: '用户未经授权'})
        }

        const token = authorization.replace('Bearer ', '')
        if (!token) {
            return response.status(401).send({message: '用户未经授权'})
        }

        const userInfo = jwt.verify(token, SECRET);
        // console.log(userInfo)

        request.body.userInfo = userInfo

        next()
    } catch (error) {
        next(new AppError('服务器内部错误', 500))
    }
}