var express = require("express");
var app = express();
var {usuario} = require("./models");

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

app.get("/", async function(req, res){
    var mostrar = await usuario.findAll();
    res.json(mostrar);
});

app.post("/", function(req, res){
    var resultado = usuario.create();
    res.json(resultado);
})

app.listen(3000, function(){
    console.log("O servidor está bruto de mais");
});
















