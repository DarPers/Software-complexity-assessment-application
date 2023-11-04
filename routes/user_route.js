const Router = require('express');
const router = new Router();
const userControlleer = require('../controllers/user_controller');

router.post('/user', userControlleer.createUser)
router.get('/user/:id', userControlleer.getOneUser);
router.get('/user', userControlleer.getUsers);
// router.get('/user?login', userControlleer.getUsersbyLogin);

module.exports = router;
