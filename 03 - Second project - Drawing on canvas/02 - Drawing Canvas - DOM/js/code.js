alert("Welcome to canvas");

var d = document.getElementById("littledraw");
var lienzo = d.getContext("2d");

console.log(lienzo);

lienzo.beginPath();
lienzo.strokeStyle = "red";
lienzo.moveTo(100, 100);
lienzo.lineTo(200, 200);
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.strokeStyle = "blue";
lienzo.moveTo(50, 10);
lienzo.lineTo(250, 2);
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.strokeStyle = "yellow";
lienzo.moveTo(180, 10);
lienzo.lineTo(290, 200);
lienzo.stroke();
lienzo.closePath();