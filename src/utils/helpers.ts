import bcrypt from 'bcryptjs'

export const hashPassword = function (pwd: string) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(pwd, salt)
}

export const checkPassword = function (pwd: string, checkPwd: string) {
    return bcrypt.compareSync(pwd, checkPwd);
}