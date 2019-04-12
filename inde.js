var express = require ('express');
var exphbs = require('express-handlebars');
var app = express();

app.use(express.static('public')); //DEcirle a express que la carpeta contiene información pública

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get ('/', function(request, response){

    var contexto = {
        titulo: 'pagina principal',
    }

    response.render('home',contexto);
});

//Todo hasta aqui tiene que estar en todos los servidores

app.listen(3000);