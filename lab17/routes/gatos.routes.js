const express = require('express');

const router = express.Router();

router.get('/ruta', (request, response, next) => {
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>Gatitos</title><meta charset="utf-8"></meta></head><body><h1>Gatitos</h1><main><h2>Hay muchas razas de gatitos.</h2><p>Yo he tenido varios gatitos.</p></body></html>'
    response.send(respuesta)

});

router.get('/comida', (request, response, next) => {
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>Comida</title><meta charset="utf-8"></meta></head><body><h1>Comida para gatitos.</h1><main><h2>La comida más popular para gatitos es whiskas.</h2><p>Whiskas tiene alto valor nutrimental..</p></body></html>'
    response.send(respuesta)
});

router.get('/hogar', (request, response, next) => {
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>Hogar</title><meta charset="utf-8"></meta></head><body><h1>Hogar</h1><main><h2>Los gatitos son muy hogareños.</h2><p>Les gusta mucho el cariño.</p></body></html>'
    response.send(respuesta)
});

router.get('/razas', (request, response, next) => {
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>Razas</title><meta charset="utf-8"></meta></head><body><h1>Razas</h1><main><h2>Hay muchas razas de gatitos.</h2><p>Existen más de 20 razas.</p></body></html>'
    response.send(respuesta)
});



module.exports = router;