const jwt = require('jsonwebtoken')
const {secret} = require('../config')

module.exports = function (req, res, next) {
    if (req.method === "OPTIONS") {
        next()
    }

    try {
        console.log(req)
        const token = req.headers.authorization.split(' ')[1]
        console.log(token)
        if (!token) {
            return res.status(403).json({message: "You are not authorized"})
        }
        const decodedData = jwt.verify(token, secret)
        req.user = decodedData
        next()
    } catch (e) {
        console.log(e)
        return res.status(403).json({message: "You are not authorized"})
    }
}