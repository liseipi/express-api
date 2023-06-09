import express, {Request, Response} from 'express'
import {getProfile} from "./my.s";

const router = express.Router()

router.get('/profile', async (req: Request, res: Response) => {
    const {id} = req.body.userInfo
    const profile = await getProfile(id)
    return res.json({
        statusCode: 200,
        error: 0,
        message: 'OK',
        data: profile
    })
})


export default {'path': '/my', 'route': router, 'auth': true}