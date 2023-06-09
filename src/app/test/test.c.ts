import express, { Request, Response } from 'express'

const router = express.Router()

router.get('/test', (req: Request, res: Response) => {
  return res.json({ msg: 'ok1' })
})

export default { 'path': '/', 'route': router }