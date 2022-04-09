const express = require('express');
const path = require('path');
const filesystem = require('fs');

const router = express.Router();

const login_controller = require("../controllers/login_controller");

router.get('/login', login_controller.getLogin);
router.post('/login', login_controller.login);
router.get('/login', login_controller.logout);

module.exports = router;