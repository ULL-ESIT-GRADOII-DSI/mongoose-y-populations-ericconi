(function(){
    "use strict";
    const util = require('util');
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/inputs'); 
    
    let Schema = mongoose.Schema;
    
    /* Esquema de la base de datos para usuarios */
    
    let Schema_user = mongoose.Schema_user;
    
    let User = new Schema_user({
        name: String
    });
    
    
   /*Esquema de la base de datos para la practica csv con mongodb*/ 
    let Datos = new Schema({
      name: String,
      data: String
    });
    
    const Modelo  = mongoose.model('Modelo', Datos);
    
    
    if (Modelo) {
        Modelo.remove({}).exec();
    }


 
    let input = new Modelo({
        name: 'input', 
        data: '"producto",           "precio"\n"camisa",             "4,3"\n"libro de O\"Reilly", "7,2"' 
        
    });
    
    
    let input2 = new Modelo({ 
        name: 'input2', 
        data: '"producto",           "precio"  "fecha"\n"camisa",             "4,3",    "14/01"\n"libro de O\"Reilly", "7,2"     "13/02"'
        
    });
    
    let input3 = new Modelo({
        name: 'input3', 
        data: '"edad",  "sueldo",  "peso"\n,         "6000€",  "90Kg"\n47,       "3000€",  "100Kg"'
        
    });
    
    
    let p1 = input.save(function (err, file1) {
        if (err) return console.error(err);
    });
    
    let p2 = input2.save(function (err, file1) {
        if (err) return console.error(err);
    });
    
    let p3 = input3.save(function (err, file1) {
        if (err) return console.error(err);
    });
    
    Promise.all([p1, p2, p3]).then((value) => { 
        console.log(util.inspect(value, {depth: null}));
        //mongoose.connection.close();
    });
    
    module.exports = Modelo;
})();