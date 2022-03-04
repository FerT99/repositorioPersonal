const { response } = require("express");
const express = require("express");
const { listenerCount } = require("process");
const app = express();

app.use((request, response, next) => {
    console.log("Middleware!");
    next();
});

app.use('/ruta', (request, response, next) => {
    response.send('Respuesta de la ruta "/ruta"'); 
    response.send('Respuesta de la ruta "/ruta"'); 
});

app.use((request, response, next) => {
    console.log("Otro middleware");
    response.send("Hola mundo"); //manda la respuesta
})

//Capacidad de reaccionar a diferentes rutas se hace con otro middleware

app.listen(3000);

/*const http = require("http");

const server = http.createServer( (request, response) => {

    if(request.url ==="/") {
        console.log(request);
        response.setHeader("Content-Type", "text/html");
        response.write("<!DOCTYPE html><html lang = 'es-mx'><head><title>Caballos</title><meta charset = "utf/8"></meta></head>');
        response.write('<body>');
        response.write('<h1>Bienvenido</h1>');
        response.write('<main>Aquí se habla de x</main>');
        response.write("<ol>");
        for (let i in caballos) {
            response.write("<li> + caballos[i] + '</li>');
        }
        response.write('</body>');
        response.end();

} else {

    response.statusCode = 404;
    console.log(request);
    response.setHeader("Content-Type", "text/html");
    response.write("<!DOCTYPE html><html lang = 'es-mx'><head><title>Caballos | Page not found</title><meta charset = "utf/8"></meta></head>');
    response.write('<body>');
    response.write('<h1>Página "+ request.url +" no se encontró</h1>');
    response.write('</body>');
    response.end();
}
})
*/
//revisar que tipo de metodo http es, revisar info de ruta (url) y metodo (ejemplo: GET); 
//para que no se cuelgue al mandar solicitud que no existe, se levanta un error