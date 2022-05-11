var express = require("express");
var app = express();
var {usuario, empresa} = require("./models");

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

app.get("/usuarios", async function(req, res){
    var mostrar = await usuario.findAll();
    res.json(mostrar);
});

app.get("/usuarios:id", async function(req, res){ 
  var resultado = await usuario.findAll();
    res.json(resultado);
});

app.post("/usuarios", function(req, res){
    var resultado = usuario.create(req.body);
    res.json(resultado);
});

app.put("/usarios:id", async function(req, res){
  const resultado = await usuario.findByPk(req.params.id);
  resultado.nome = "tamiris";
  const resultadoSave = await resultado.save();
  res.json(resultadoSave);
});

app.delete("/usuarios:id", async function(req, res){
    const deletar = await usuario.findByPk(req.params.id);
    deletar.destroy();
  res.json(deletar)
});

//empresas

app.get("/empresas", async function(req, res){
    var mostrar = await empresa.findAll();
    res.json(mostrar);
});

app.get("/empresas:id", async function(req, res){ 
  var resultado = await empresa.findAll();
    res.json(resultado);
});

app.post("/empresas", function(req, res){
    var resultado = empresa.create(req.body);
    res.json(resultado);
});

app.put("/empresas:id", async function(req, res){
  const resultado = await empresa.findByPk(req.params.id);
  resultado.nome = "ufms";
  const resultadoSave = await resultado.save();
  res.json(resultadoSave);
});

app.delete("/empresas:id", async function(req, res){
    const deletar = await empresa.findByPk(req.params.id);
    deletar.destroy();
  res.json(deletar)
});

app.listen(3000, function(){
    console.log("O servidor está bruto de mais");
});
















