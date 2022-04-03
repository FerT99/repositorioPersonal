const express = require('express');

const filesystem = require("fs");

const router = express.Router();

const razas = ["Husky", "Schnauzer","Malamute"];

router.get('/ruta', (request, response, next) => {
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>Cachorritos</title><meta charset="utf-8"></meta></head><body><h1>Cachorritos</h1><main><h2>Hay muchas razas de cachorritos.</h2><p>Yo tengo 4 cachorritos.</p></body></html>'
    response.send(respuesta)

});

router.get('/comida', (request, response, next) => {
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>Comida</title><meta charset="utf-8"></meta></head><body><h1>Comida para perritos.</h1><main><h2>La comida más popular para perritos es dog chow.</h2><p>Dog chow tiene alto valor nutrimental.</p></body></html>'
    response.send(respuesta)
});

router.get('/hogar', (request, response, next) => {
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>Hogar</title><meta charset="utf-8"></meta></head><body><h1>Hogar</h1><main><h2>Los perritos son muy hogareños.</h2><p>Les gusta mucho el cariño.</p></body></html>'
    response.send(respuesta)
});

router.get('/razas', (request, response, next) => {
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>Razas</title><meta charset="utf-8"></meta></head><body><h1>Razas</h1><main><h2>Hay muchas razas de perritos.</h2><p>Estas son las razas:</p></body></html><ol>'
    for (let i in razas){
        respuesta += '<li>' + razas[i] + '</li>';
    }
    response.send(respuesta)
});

router.get('/nuevo/', (request, response, next) => {
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>Arboles</title><meta charset="utf-8"></meta></head><body><h1>Bienvenido a este sitio de Arboles</h1><main><h2>Aquí se habla se de nuevos Arboles</h2><p>Ingresa los datos del nuevo Arbol:</p><form action="/perros/nuevo" method="POST"><input type="text" name="nombre" required><input type="submit" value="Enviar"></form><br>';
    response.send(respuesta);
});

router.post('/nuevo', (request, response, next) => {
    console.log("Hola");
    console.log(request.body.nombre);
    razas.push(request.body.nombre);
    //console.log(razas);
    //console.log(razas);
    filesystem.writeFileSync('Perros.txt', request.body.nombre);
    response.status(303);
    response.redirect('/perros/razas/');
})

module.exports = router;