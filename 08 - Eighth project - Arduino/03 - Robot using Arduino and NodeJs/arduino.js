var port5 = require("johnny-five");
var circuit = new port5.Board();
var lightBulb;
var servo;
var cell;
var turno = 0;

circuit.on("ready", turnOn);

function turnOn() {
    var configuration = {pin:"A0", freq: 50}
    celda = new port5.Sensor(configuration);

    lightBulb = new port5.Led(13);
    lightBulb.on();

    servo = new port5.Servo(9);

    servo.to(0);
    servo.to(180);
    servo.to(90);

    waveFlag();
    
}

function waveFlag() {
    console.log("Light: " + cell.value);

    var luz = celda.value;
    if(luz > 800) {
        if(turno == 1) {
            turno = 0;
            servo.to(70)
        }
        else {
            turno = 1;
            servo.to(100);
        }
    }
    else {
        servo.to(150)
    }

    setTimeout(waveFlag, 1000);
}