const express = require('express');
const path = require('path')
const filesystem = require("fs");
const perrosController = require('../controllers/perros_controller');

const router = express.Router();

const cachorritos = [{nombre: "Moka"}, {nombre: "Lucky"}, {nombre: "Rocky"}];

router.get('/perritos', perrosController.mostrar);

router.get('/nuevo', perrosController.getNuevo);

router.get('/', perrosController.listar);

router.get('/:perro_id', perrosController.desplegar);

router.post('/nuevo', perrosController.postNuevo);

module.exports = router;