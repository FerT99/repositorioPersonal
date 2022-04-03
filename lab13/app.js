const express = require("express");
const path = require('path');
const app = express();

const bodyParser = require('body-parser');
//no sabemos para qué es
app.use(bodyParser.urlencoded({extended: false}));

const rutas_cachorritos = require('./routes/perros.routes');
const rutas_gatitos = require('./routes/gatos.routes');

app.use('/perros', rutas_cachorritos);
app.use('/gatos', rutas_gatitos);

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', 'views');

//Crear middleware
app.use((request, response, next) => {
    console.log('Middleware #1');
    next(); 
});

app.use('/ruta', (request, response, next) => {
    response.send('Esta es una ruta');
   
}); 

app.use('/nuevaruta', (request, response, next) => {
    console.log(request.body)
    response.send('Esta es una ruta');
}); 

app.use('/ruta_nueva', (request, response, next) => {
    console.log(request.body);
});

app.use((request, response, next) => {
    console.log('Middleware x2');
    response.send('Quiubo'); 
});

app.listen(3000);
