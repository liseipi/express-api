import express from 'express'
import fs from 'fs'
import path from 'path'
import {authGuard} from "../middleware/authguard.middleware";

const router = express.Router()

function processRoutePath(route_path: any) {
    return fs.readdirSync(route_path).forEach(function (file) {
        let filepath = path.join(route_path + '/' + file)
        fs.stat(filepath, function (err, stat) {
            // if (fs.lstatSync(subpath).isDirectory()) {
            if (stat.isDirectory()) {
                processRoutePath(filepath)
            } else {
                if (file.endsWith('.c.js')) {
                    let processPath = filepath.split(path.join('dist/'))
                    if (processPath && processPath.length == 2) {
                        const route = require(path.join('../' + processPath[1]))
                        if (route.default.auth) {
                            router.use(route.default.path, authGuard, route.default.route)
                        } else {
                            router.use(route.default.path, route.default.route)
                        }
                    }
                }
            }
        })
    })
}

processRoutePath(path.resolve(__dirname, '../app'))

export default router
