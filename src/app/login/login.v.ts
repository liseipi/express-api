import {Request, Response, NextFunction} from 'express'
import Validator from 'validatorjs'

Validator.useLang('zh')

export const validateLoginData = async (request: Request, response: Response, next: NextFunction) => {
    const {email, password} = request.body

    let rules = {
        email: 'required|email',
        password: 'required|min:6'
    }
    let customErrorMessages = {
        'email.required': '邮箱地址不为空.',
        'email.email': '填写正确的邮箱格式.',
        'password.required': '填写正确密码格式.',
    }

    let validation = new Validator({email, password}, rules, customErrorMessages)
    validation.passes()
    if (Number(validation.errorCount) > 0) {
        let allError = validation.errors.all()
        return response.status(200).send({
            statusCode: 200,
            error: 1,
            message: allError,
            data: []
        })
    }

    next()
}

export const validateUserData = async (request: Request, response: Response, next: NextFunction) => {
    const {fullName, email, password, repeat_password} = request.body

    let rules = {
        fullName: 'required',
        email: 'required|email',
        password: 'required|min:6',
        repeat_password: 'required|same:password'
    }
    let customErrorMessages = {
        'fullName.required': 'Missing full name.',
        'email.required': '邮箱地址不为空.',
        'email.email': '填写正确的邮箱格式.'
    }

    let validation = new Validator({fullName, email, password, repeat_password}, rules, customErrorMessages)
    validation.passes()
    if (Number(validation.errorCount) > 0) {
        let allError = validation.errors.all()
        return response.status(200).send({
            statusCode: 200,
            error: 1,
            message: allError,
            data: []
        })
    }

    // const user = await getUserByEmail(email)
    // if (user) {
    //   return response.status(409).send({ statusCode: 409, message: '用户email地址已存在.' })
    // }

    next()
}