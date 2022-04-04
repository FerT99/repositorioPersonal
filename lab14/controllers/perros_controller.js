const path = require("path");
const filesystem = require("fs");
const Perro = require("../models/perro");

exports.mostrar = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'yo.html'));
};

exports.listar = (request, response, next) => {
    console.log(request.cookies.ultimo_perro);
    //console.log(request.get('Cookie'.split("=")[1]));
    console.log('micookie' + request.cookies.ultimo_perro);
    response.render('cachorritos', {
        cachorritos: Perro.fetchAll(),
        ultimo_perro: request.cookies.ultimo_perro
     }); //abre archivo js 
    
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
    response.setHeader('Set-Cookie', 'ultimo_perro='+perro.nombre); //inicializar cookie cuando se hace nuevo post
    response.redirect('/perros');
}
