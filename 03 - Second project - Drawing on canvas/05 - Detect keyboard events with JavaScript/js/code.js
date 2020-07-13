var keys = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

console.log(keys);

document.addEventListener("keyup", keyDraw);

var d = document.getElementById("paper");
var lienzo = d.getContext("2d");
var x = 150;
var y = 150;

function drawLine(color, x1, y1, x2, y2) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(x1, y1);;
    lienzo.lineTo(x2, y2);
    lienzo.stroke();
    lienzo.closePath();
}

drawLine("red", 149, 149, 151, 151);

function keyDraw(evento) {
    //Line color
    var color = "red";
    var move = 10;

    switch(evento.keyCode) {
        case keys.UP :
                console.log("UP");        
                drawLine(color, x , y , x, (y-=move));
            break;
        case keys.LEFT:
                console.log("LEFT");
                drawLine(color, x, y, (x-=move), y);
            break;
        case keys.RIGHT:
                console.log("RIGHT");
                drawLine(color, x, y, (x+=move), y);
            break;
        case keys.DOWN:
                console.log("DOWN");
                drawLine(color, x, y, x, (y+=move));
            break;
        default:
                console.log("Another key");
            break;
    }
}