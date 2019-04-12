var express = require ('express');
var exphbs = require('express-handlebars');
var app = express();

var fs = require('fs');
var cont = 0;

app.use(express.static('public')); //DEcirle a express que la carpeta contiene información pública
app.use(express.urlencoded( {extended: true}));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get ('/', function(request, response){

    var contexto = {
        titulo: 'pagina principal',
    }

    response.render('home',contexto);
});

function archivoCreado(){
    console.log('Archivo Creado mis prros')
}

//Todo hasta aqui tiene que estar en todos los servidores

app.post('/login', function(request, response){ //PAra crear información
    console.log(request.body.correo);
    console.log(request.body.contrasena);
    fs.writeFile('Usuario'+ cont+'.txt', request.body.correo + '\n' + request.body.contrasena, archivoCreado);
    cont ++;
    response.send('el huevo 2');
}); 


app.listen(3000);