const db = require('../db');

class UserController{

    async createUser (req, res){
        const {login, email, password} = req.body
        console.log(login, email, password)
        const newUser = await db.query(`INSERT INTO "user" ("login", "password", "email") VALUES ($1, $2, $3) RETURNING *`, [login, password, email]);
        res.json(newUser.rows[0])
    }

    async getUsers (req, res){
        const users = await db.query(`SELECT * FROM public."user"`);
        console.log(users)
        res.json(users.rows);
    }

    // async getUsersbyLogin (req, res){
    //     const login = req.query.login
    //     const user = await db.query(`SELECT * FROM public."user" where login = $1`, [login]);
    //     res.json(user.rows[0]);
    // }

    async getUsersbyLogin (login){
        const user = await db.query(`SELECT * FROM public."user" where login = $1`, [login]);
        return user.rows[0];
    }

    async createUser (login, email, password){
        await db.query(`INSERT INTO "user" ("login", "password", "email") VALUES ($1, $2, $3) RETURNING *`, [login, password, email]);
    }

    async getOneUser (req, res){
        const id = req.params.id;
        const user = await db.query(`SELECT * FROM public."user" where id = $1`, [id]);
        res.json(user.rows[0])
    }
}

module.exports = new UserController()