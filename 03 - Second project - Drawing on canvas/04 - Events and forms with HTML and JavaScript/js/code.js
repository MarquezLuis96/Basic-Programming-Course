var d = document.getElementById("little_draw");
var lienzo = d.getContext("2d");

var txt = document.getElementById("text_lines");
var btn = document.getElementById("button_send");
btn.addEventListener("click", drawShape);

console.log(lienzo);
console.log(txt);
console.log(btn);

function drawLine(color, x1, y1, x2, y2) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x1, y1);
    lienzo.lineTo(x2, y2);
    lienzo.stroke();
    lienzo.closePath();
}

function drawShape() {
    //Number of lines
    var lines = parseInt(txt.value);
    var l = 0;
    var width = d.width;
    var space = (width/lines);

    console.log(txt);
    //Shape 1: Lower-left corner
    for(l = 0; l < lines; l++) {
        y1 = (space*l);
        x2 = (space * (l+1));
        drawLine("blue", (0), (y1), (x2), (lines*space));
    }

    //Shape 2: Lower-right corner
    for(l = 0; l < lines; l++) {
        y1 = (space*l);
        x2 = ((lines*space) - (space * (l+1)));
        drawLine("red", width, y1, x2, width);
    }

    //Shape 3: Upper-left corner
    for(l = 0; l < lines; l++){
        y1 = ((lines*space) - (space *l));
        x2 = (space * (l+1));
        drawLine("yellow", 0, y1, x2, 0);
    }

    //Shape 4: Upper-right corner
    for(l = 0; l < lines; l++) {
        y1 = ((lines*space) - (space*(l+1)));
        x2 = ((lines*space) - (space*(l+1)));
        drawLine("#722F37 ", width, y1, x2, 0)
    }
}

//Frame
var width = ((d.width)-(1));
drawLine("black", 1, 1, 1, width);
drawLine("black", 1, 1, width, 0);
drawLine("black", width, 1, width, width);
drawLine("black", 1, width, width, width);