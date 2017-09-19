var app = require('./config/express')();
var http = require('http').Server(app);

var porta = process.env.PORT || 3000;

http.listen(porta, function(){
    console.log("Servidor rodando");
});