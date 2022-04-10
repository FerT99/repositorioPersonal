const express = require('express');
const path = require('path');
const filesystem = require('fs');

const isAuth = require('../controllers/is-auth.js');
router.get('/is-auth.js', isAuth, login.login); //controlador y acción

const router = express.Router();

const login_controller = require("../controllers/login_controller");

router.get('/login', login_controller.getLogin);
router.post('/login', login_controller.login);
router.get('/login', login_controller.logout);

module.exports = router;