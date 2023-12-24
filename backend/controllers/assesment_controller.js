const { validationResult } = require('express-validator');
const AssesmentService = require('../services/assesment_service');
const assesment_service = require('../services/assesment_service');

class AssesmentController {

    async defineTypeProject(req, res){
        try {
            const errors = validationResult(req);
            console.log(errors);
            if (!errors.isEmpty()){
                return res.status(400).json({message: "Assesment error", errors})
            }
            const {weight, language} = req.body;
            const linesOfCode = assesment_service.countLinesOfCode(weight, language);
            const projectType = assesment_service.defineProjectType(linesOfCode);
            const kloc = linesOfCode / 1000;
            const data = {KLOC: kloc, projectType:projectType};
            res.json(data)
        }
        catch (e) {
            console.log(e)
            res.status(400).json({message: 'Assesment error'})
        }
    }

    async getCocomoAssesment(req, res){
        try {
            const errors = validationResult(req);
            console.log(errors);
            if (!errors.isEmpty()){
                return res.status(400).json({message: "Assesment error", errors})
            }
            const {koeffs, projectType, KLOC} = req.body;
            const assessment = assesment_service.getCocomoAssesment(projectType, KLOC, koeffs);
            res.json(assessment)
        }
        catch (e) {
            console.log(e)
            res.status(400).json({message: 'Assesment error'})
        }
    }

    async getProjectDescription(req, res){
        try {
            const errors = validationResult(req);
            console.log(errors);
            if (!errors.isEmpty()){
                return res.status(400).json({message: "Assesment error", errors})
            }
            const {projectType} = req.body;
            const assessment = assesment_service.getProjectDescription(projectType);
            res.json(assessment)
        }
        catch (e) {
            console.log(e)
            res.status(400).json({message: 'Assesment error'})
        }
    }

    async countMFPs(req, res){
        try {
            const errors = validationResult(req);
            console.log(errors);
            if (!errors.isEmpty()){
                return res.status(400).json({message: "Assesment error", errors})
            }
            const {dets, rets, fileType} = req.body;

            if (fileType != undefined){
                const complexity = AssesmentService.defineComplexity(rets, dets);
                const weight = AssesmentService.countWeight(rets, fileType, complexity);
                const data = {complexity : complexity, weight : weight};
                res.json(data)
            }
            else{
                res.json({complexity : "4545", weight : "weight"})
            }
        }
        catch (e) {
            console.log(e)
            res.status(400).json({message: 'Assesment error'})
        }
    }
}

module.exports = new AssesmentController()