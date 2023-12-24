const Router = require('express')
const router = new Router()
const AssesmentController = require('../controllers/assesment_controller');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/countpoints', authMiddleware, AssesmentController.countMFPs)
router.post('/getCocomoAssesment', authMiddleware, AssesmentController.getCocomoAssesment)
router.post('/defineProjectType', authMiddleware, AssesmentController.defineTypeProject)
router.post('/getProjectDescroption', authMiddleware, AssesmentController.getProjectDescription)

module.exports = router