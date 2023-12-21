const { validationResult } = require('express-validator');
const project_controller = require('./project_db_controller');


class ProjectController {
    async getAllProjectByUserId(req, res){
        try {
            const errors = validationResult(req);
            console.log(errors);
            if (!errors.isEmpty()){
                return res.status(400).json({message: "Reading project error", errors})
            }
            const {id} = req.body
            const projects = await project_controller.getProjectsbyUserId(id);
            res.json(projects);
        }
        catch (e) {
            console.log(e)
            res.status(400).json({message: 'Reading project error'})
        }
    }

    async deleteProject(req, res){
        try {
            const errors = validationResult(req);
            console.log(errors);
            if (!errors.isEmpty()){
                return res.status(400).json({message: "Reading project error", errors})
            }
            const {id} = req.body;
            const responce = await project_controller.deleteProject(id);
            res.json(responce);
        }
        catch (e) {
            console.log(e)
            res.status(400).json({message: 'Reading project error'})
        }
    }

    async createNewProject(req, res){
        try {
            const errors = validationResult(req);
            console.log(errors);
            if (!errors.isEmpty()){
                return res.status(400).json({message: "Reading project error", errors})
            }
            const {project, user_id} = req.body;
            const responce = await project_controller.createProject(project, user_id);
            res.json(responce);
        }
        catch (e) {
            console.log(e)
            res.status(400).json({message: 'Reading project error'})
        }
    }
}

module.exports = new ProjectController()