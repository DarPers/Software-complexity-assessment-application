const Router = require('express')
const router = new Router()
const AuthController = require('../controllers/auth_controller');
const {check} = require("express-validator")
const authMiddleware = require('../middlewares/authMiddleware')

router.post('/registration', [
    check("login", "login can't be empty").notEmpty(),
    check("password", "password can't be less than 8 chars and more than 20 chars").isLength({min: 8, max: 10}),
    check("email", "it must be an email").isEmail()
], AuthController.registration)
router.post('/login', AuthController.login)
router.get('/test', authMiddleware, AuthController.getUsers)

module.exports = router