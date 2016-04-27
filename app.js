"use strict";

const express = require('express');
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const Modelo = require('./models/mongo.js');



app.set('port', (process.env.PORT || 5000));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(express.static(__dirname + '/public'));

const calculate = require('./models/calculate');

app.get('/', (request, response) => {     
  response.render('index', { title: "ajax-emac6"});
});

app.get('/csv', (request, response) => {
  response.send({ "rows": calculate(request.query.textocsv) });
});


app.listen(app.get('port'), () => {
    console.log(`Node app is running at localhost: ${app.get('port')}` );
});

app.get('/mongo/', function(req, res) {
    
    Modelo.find({}, function(err, entradas) {
        
        
        if (err)
            return err;
        if (entradas.length >= 4) {
            Modelo.find({ name: entradas[3].name }).remove().exec();
        }
    });
    
    /********************* USUARIO CON DATOS *********************/
    let input = new Modelo({
        "name": req.query.name,
        "data": req.query.content
    });
    
    
    /********************* GUARDADO EN BS *********************/
    input.save(function(err) {
        if (err) {
            return err;
        }
        console.log("Guardado en BDD");
    });
});

app.get('/showButtons', function(req, res) {
    Modelo.find({}, function(err, file) {
        if (err)
            return err;
        res.send(file);
    });
});



app.get('/findMongo', function(req, res) {

  Modelo.find({name: req.query.name}, 
    function(err, file) {
      if (err)
        return err;
      console.log(file);
      res.send(file);
    });
});