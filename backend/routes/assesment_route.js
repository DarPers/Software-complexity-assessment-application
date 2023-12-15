const Router = require('express')
const router = new Router()
const AssesmentController = require('../controllers/assesment_controller');

router.post('/countpoints', AssesmentController.countMFPs)
router.post('/getCocomoAssesment', AssesmentController.getCocomoAssesment)
router.post('/defineProjectType', AssesmentController.defineTypeProject)

module.exports = router