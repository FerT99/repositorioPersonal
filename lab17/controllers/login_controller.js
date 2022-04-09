const path = require("path");
const filesystem = require("fs");


exports.getLogin = (require, response, next) => {
    const usuario = request.session.usuario ? request.session.usuario: '';
    response.render('login', {
        usuario: usuario //poder llamar usuario en otra vista
    });
}

exports.login = (request, response, next) => {
    if(usuario.login(request.body.nombre, request.body.contraseña)) {
        request.session.usuario = request.session.nombre;
        response.redirect('/perros/');
    } else {
        response.redirect('/usuarios/login');
    }
}

exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/usuarios/login');
    })
}
