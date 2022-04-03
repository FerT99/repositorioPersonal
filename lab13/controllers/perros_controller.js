const path = require("path");
const filesystem = require("fs");
const Perro = require("../models/perro");

exports.mostrar = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'yo.html'));
};

exports.listar = (request, response, next) => {
    response.render('cachorritos', {cachorritos: Perro.fetchAll()});
}

exports.getNuevo = (request, response, next) => {
    response.render('nuevo');
}

exports.postNuevo = (request, response, next) => {
    const perro = new Perro(request.body.nombre);
    perro.save();
    console.log("Hola");
    console.log(request.body.nombre);
    filesystem.writeFileSync('Perros.txt', request.body.nombre);
    response.status(303);
    response.redirect('/perros');
}
