const user_controller = require('./user_controller');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const {secret} = require("../config");

const generateAccessToken = (id, login) => {
    const payload = {
        id,
        login
    }

    return jwt.sign(payload, secret, {expiresIn : "24h"})
}

class AuthController {
    async registration(req, res){
        try {
            const errors = validationResult(req);
            console.log(errors);
            if (!errors.isEmpty()){
                return res.status(400).json({message: "Registration error", errors})
            }
            const {login, email, password} = req.body
            const candidate = await user_controller.getUsersbyLogin(login);
            if (candidate){
                res.status(400).json({message : 'Login is taken'})
                return;
            }
            const hashPassword = bcrypt.hashSync(password, 4);
            user_controller.createUser(login, email, hashPassword);
            res.json({message : 'User is created :)'})
        }
        catch (e) {
            console.log(e)
            res.status(400).json({message: 'Registration error'})
        }
    }

    async login(req, res){
        try {
            const {login, password} = req.body
            const user = await user_controller.getUsersbyLogin(login);
            if (!user){
                return res.status(400).json({message : 'User does not exist'})
            }
            const validPassword = bcrypt.compareSync(password, user.password)

            if(!validPassword){
                return res.status(400).json({message : 'Password is not right'})
            }
            const token = generateAccessToken(user.id, user.login);
            res.json({token: token, id: user.id});
        }
        catch (e) {
            console.log(e)
            res.status(400).json({message: 'Login error'})
        }
    }

    async getUsers(req, res){
        try {
            res.json("OK");
        }
        catch (e) {}
    }
}

module.exports = new AuthController()