var basededatos = {
	usuario: "usuario",
	password: "contraseñadeusuario"
};
console.log("Arrancando Backend Andres Dominguez");
var express = require("express");
var parcero = require("body-parser");
var web = express();
web.use(parcero.urlencoded({extended:true}) );
var servidor;

servidor = web.listen(8080, function () {
	console.log("Sevidor arrancado");
});
web.get("/", function (req, res){
	res.sendfile("login.html");
});
web.post("/login", function (req, res){
	if(req.body.user == basededatos.usuario && req.body.pass == basededatos.password){
		res.send("<h1>Hola <strong>" + req.body.user + "</strong> acabas de entrar a la plataforma</h1>");	
	}
	else{
		res.send("<h1>Hola <strong>" + req.body.user + "</strong> lamentamos el inconveniente, no estás registrado en nuestra Base de datos.</h1>");	
	}
	
});
