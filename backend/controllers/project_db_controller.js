const db = require('../db');

class ProjectController{

    async createProject (project, user_id){
        const newProject = await db.query(`INSERT INTO "project" ("user_id", "title", "description", "language") VALUES ($1, $2, $3, $4) RETURNING *`,
                                         [user_id, project.data.name, project.data.desc, project.data.language]);
        console.log("55555");
        console.log(newProject.rows[0])
        return await db.query(`INSERT INTO "assessment" ("project_id", "FPs", "person_month", "month", "person", "project_type") VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
                                         [newProject.rows[0].id, project.assesment.weight, project.assesment.assesmentCocomo.people_month,
                                         project.assesment.assesmentCocomo.month, project.assesment.assesmentCocomo.people, project.assesment.projectType]);
    }

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

    async deleteProject (id){
        const response_ = await db.query(`DELETE FROM public."assessment" where project_id=$1`, [id]);
        const response = await db.query(`DELETE FROM public."project" where id=$1`, [id]);
        return response;
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

module.exports = new ProjectController()