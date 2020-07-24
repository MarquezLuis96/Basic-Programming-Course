var jf = require("johnny-five");
var circuit = new jf.Board();

circuit.on("ready", turnOn);

function turnOn() {
    var led = new jf.Led(13);
    led.blink(500);
}