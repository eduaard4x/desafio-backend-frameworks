const express = require('express');
const router = express.Router();
const controller = require('../controllers/UserController');

router.get('/users', controller.createUser);

module.exports = router;
