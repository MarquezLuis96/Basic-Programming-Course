var keys = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

console.log(keys);

document.addEventListener("keyup", keyDraw);

function keyDraw(evento) {
    switch(evento.keyCode) {
        case keys.UP :
                console.log("UP");
            break;
        case keys.LEFT:
                console.log("LEFT");
            break;
        case keys.RIGHT:
                console.log("RIGHT");
            break;
        case keys.DOWN:
                console.log("DOWN");
            break;
        default:
                console.log("Another key");
            break;
    }
}