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
    Perro.fetchAll()
    .then(([rows, FieldData]) => { //si se cumple promesa, hace esto (definir función anon con rows y fielddata(registros))
        console.log(rows);
        response.render('cachorritos', //despliega vista 
        {
            cachorritos: rows, //mandar rows a la vista
            ultimo_perro: request.cookies.ultimo_perro
        });  
      }).catch(err => {console.log(err)}); 
     
}

exports.getNuevo = (request, response, next) => {
    response.render('nuevo');
}

exports.postNuevo = (request, response, next) => {
    const perro = new Perro(request.body.nombre, request.body.foto, request.body.descripción);
    perro.save()
    .then(()  => { 
    console.log("Hola");
    console.log(request.body.nombre); 
    filesystem.writeFileSync('Perros.txt', request.body.nombre);
    response.status(303);
    response.setHeader('Set-Cookie', 'ultimo_perro=' + perro.nombre); //inicializar cookie cuando se hace nuevo post
    response.redirect('/perros');
    }).catch(err => {
        console.log(err)
    }) 
}

exports.desplegar = (request, response, next) => {//exporto para que otros archivos usen la función
    Perro.fetchOne(request.params.perro_id) //búsqueda de ID 
    .then(([rows, FieldData]) => {
        response.render('cachorritos', {
            cachorritos: rows,
            ultimo_perro: request.cookies.ultimo_perro
        });
    }).catch(err => {console.log(err)}); 
}
