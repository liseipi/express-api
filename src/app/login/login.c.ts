import express, {NextFunction, Request, Response} from 'express'
// import {redisClient} from '../../config/redis.config'
// import {mysqlConnection} from '../../config/mysql.config'
import {validateLoginData, validateUserData} from './login.v'
import {checkPassword, hashPassword} from '../../utils/helpers'
import {getUserByEmail, LoginUser, registerUser, saveProfile} from './login.s'
// import {AppError} from '../../model/index.model'
import jwt from 'jsonwebtoken'
import {SECRET} from '../../config/app.config'

const router = express.Router()

// @desc    Post login user
// route    Post /api/login
// @access  Private
router.post('/login', validateLoginData, async (req: Request, res: Response, next: NextFunction) => {
    // await redisClient.set('key11', JSON.stringify(data))
    const {email, password} = req.body

    try {
        const existUser = await LoginUser(email)
        if (!existUser) {
            return res.status(200).send({
                statusCode: 200,
                error: 1,
                message: '用户或密码失败.',
                data: []
            })
        }

        const hashedPassword = checkPassword(password, existUser.password)
        if (!hashedPassword) {
            return res.status(200).send({
                statusCode: 200,
                error: 1,
                message: '用户或密码失败.',
                data: []
            })
        } else {
            const token = jwt.sign({id: existUser.id, email: existUser.email}, SECRET, {expiresIn: '30d'});

            return res.json({
                statusCode: 200,
                error: 0,
                message: 'OK',
                data: {token}
            })
        }
    } catch (err) {
        return next(err)
    }

})

router.post('/signup', validateUserData, async (req: Request, res: Response, next: NextFunction) => {
    const {fullName, email, password, repeat_password} = req.body

    try {
        const existUser = await getUserByEmail(email)
        if (existUser) {
            // throw new AppError('服务器内部错误', 500)
            return res.status(200).send({
                statusCode: 200,
                error: 1,
                message: '用户email地址已存在.',
                data: []
            })
        }

        const hashedPassword = hashPassword(password)
        const user = await registerUser(email, hashedPassword)

        if (user && user.affectedRows === 1) {
            const profile = await saveProfile(user.insertId, fullName)
            if (profile && profile.affectedRows === 1) {

                const existUser = await LoginUser(email)
                const token = jwt.sign({id: existUser.id, email: existUser.email}, SECRET, {expiresIn: '30d'});

                return res.json({
                    statusCode: 200,
                    error: 0,
                    message: 'OK',
                    data: {token}
                })
            }
        }
    } catch (err) {
        // console.log(err)
        // return next(new AppError('服务器内部错误', 500))
        return next(err)
    }

})

export default {'path': '/', 'route': router}