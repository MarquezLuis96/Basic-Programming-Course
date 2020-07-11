//Taking the canvas element and assigning it to the canvas variable
var d = document.getElementById("draw");
var lienzo = d.getContext("2d");

//Verifying that the canvas has been loaded
console.log(lienzo);

/*
Function that draws a line given two points.
In this function 5 parameters are received:
Color: Color of the line
x1: x-coordinate of the first point
x2: y-coordinate of the first point
x2: x-coordinate of the first point
x2: y-coordinate of the first point
*/
function drawLine(color, x1, y1, x2, y2) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x1, y1);
    lienzo.lineTo(x2, y2);
    lienzo.stroke();
    lienzo.closePath();
}

//Number of lines to be draw
var lines = 30;
var l = 0;

//Draw 1 made with while cycle
/*while(l < lines) {
    drawLine("#AAAAFF", (0), (l*10), (10*(l+1)), (300));
    console.log("Line: " + l);
    l+=1;
}*/

//Shape 1: Lower-left corner
for(l = 0; l < lines; l++) {
    y1 = (10*l);
    x2 = (10 * (l+1));
    drawLine("blue", (0), (y1), (x2), (lines*10));
}

//Shape 2: Lower-right corner
for(l = 0; l < lines; l++) {
    y1 = (10*l);
    x2 = ((lines*10) - (10 * (l+1)));
    drawLine("red", 300, y1, x2, 300);
}

//Shape 3: Upper-left corner
for(l = 0; l < lines; l++){
    y1 = ((lines*10) - (10 *l));
    x2 = (10 * (l+1));
    drawLine("yellow", 0, y1, x2, 0);
}

//Shape 4: Upper-right corner
for(l = 0; l < lines; l++) {
    y1 = ((lines*10) - (10*(l+1)));
    x2 = ((lines*10) - (10*(l+1)));
    drawLine("#722f37 ", 300, y1, x2, 0)
}

//Shape 5: Diagonal Lower-left to Upper-right
for(l = 0; l < lines; l++) {
    y1 = (((lines*10)/2)+(l*10));
    y2 = (((lines*10)/2)-(l*10));
    drawLine("black", 0, y1, 300,  y2);
}

//Shape 5: Diagonal Upper-left to Lower-right
for(l = 0; l < lines; l++) {
    y2 = (((lines*10)/2)+(l*10));
    y1 = (((lines*10)/2)-(l*10));
    drawLine("black", 0, y1, 300,  y2);
}

//Shape 6: Central Diagonal upper-lef to lower-right
for(l = 0; l < lines; l++) {
    x1 = (((lines*10)/2) - (10*(l+1)));
    x2 = (((lines*10)/2) + (10*(l+1)));
    drawLine("black", x1, 0, x2 , 300);
}

//Shape 7: Central Diagonal upper-right to lower-left
for(l = 0; l < lines; l++) {
    x2 = (((lines*10)/2) - (10*(l+1)));
    x1 = (((lines*10)/2) + (10*(l+1)));
    drawLine("black", x1, 0, x2 , 300);
}

//Drawing a frame for the main drawing
var markColor = "#9000ff";
drawLine(markColor, 1, 1, 1, 299);
drawLine(markColor, 1, 1, 299, 1);
drawLine(markColor, 1, 299, 299, 299);
drawLine(markColor, 299, 1, 299, 299);