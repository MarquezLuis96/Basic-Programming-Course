var express = require("express");
var app = express();

app.get("/", ini);
app.get("/course", course);

function ini(peticion, resultado) {
    resultado.send("Prueba de <strong>mensaje</strong>");
}

function course(peticion, resultado) {
    resultado.send("Este es un <strong>curso</strong>");
}

app.listen(8989);