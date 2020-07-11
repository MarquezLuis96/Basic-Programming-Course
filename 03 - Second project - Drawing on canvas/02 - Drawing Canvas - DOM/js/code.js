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

drawLine("orange", 100, 100, 300, 50);
drawLine("pink", 10, 300, 220, 10);
drawLine("white", 310, 10, 10, 220);
drawLine("cyan", 220, 290, 59, 125);

function drawLine(color, x1, y1, x2, y2) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x1, y1);
    lienzo.lineTo(x2, y2);
    lienzo.stroke();
    lienzo.closePath();
}   