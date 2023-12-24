const db = require('../db');

class UserController{
    
    async getUsersbyLogin (login){
        const user = await db.query(`SELECT * FROM public."user" where login = $1`, [login]);
        return user.rows[0];
    }

    async createUser (login, email, password){
        await db.query(`INSERT INTO "user" ("login", "password", "email") VALUES ($1, $2, $3) RETURNING *`, [login, password, email]);
    }
}

module.exports = new UserController()