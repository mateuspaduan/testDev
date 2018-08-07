var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Product = require('./api/models/todoListModel'),
    bodyParser = require('body-parser');


mongoose.Promise = global.Promise;
var mongoDB = 'mongodb://mateuspaduan:almostadmin2@ds115762.mlab.com:15762/testdev';
mongoose.connect(mongoDB); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/todoListRoutes'); //Importando as rotas
routes(app); //Registrando as rotas

app.listen(port);

console.log('Serving on: ' + port);