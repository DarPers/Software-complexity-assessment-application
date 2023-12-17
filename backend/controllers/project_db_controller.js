const db = require('../db');

class UserController{

    // async createUser (req, res){
    //     const {login, email, password} = req.body
    //     console.log(login, email, password)
    //     const newUser = await db.query(`INSERT INTO "user" ("login", "password", "email") VALUES ($1, $2, $3) RETURNING *`, [login, password, email]);
    //     res.json(newUser.rows[0])
    // }

    async getProjectsbyUserId (id){
        const projects = await db.query(`SELECT * FROM public."project" where user_id=$1`, [id]);
        const assesment = this.mergeData(projects.rows);
        return assesment;
    }

    async getProjectsAssesmentbyProjectId (id){
        const projects = await db.query(`SELECT * FROM public."assessment" where project_id=$1`, [id]);
        console.log(projects.rows);
        return projects.rows;
    }

    async mergeData (projects) {
        let assesment = [];
        for (const project of projects) {
            const assesm = await this.getProjectsAssesmentbyProjectId(project.id);
            assesment.push({id: project.id, user_id: project.user_id, title: project.title, description: project.description,
            language: project.language, assesment: assesm});
        }
        return assesment;
    }

}

module.exports = new UserController()