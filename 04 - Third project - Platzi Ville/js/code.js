var vp = document.getElementById("farm");
var paper = vp.getContext("2d");

var nCows = randomF(0, 10);
console.log("Cows: " + nCows);
var nPigs = randomF(0, 6);
console.log("Pigs: " + nPigs);
var nChickens = randomF(0, 5);
console.log("Chickens: " + nChickens);
var nWolfs = randomF(0, 3);
console.log("Wolfs: " + nWolfs);

function draw() {
    if (villeBackgroung.loadOk == true){
        drawBackground();
    }

    if (cow.loadOk) {
        for(var i= 0; i < nCows; i++) {
            var x = randomF(0, 5);
            var y = randomF(0, 5);;

            x*=80;
            y*=80;

            drawCows(x, y);
        }
    }

    if(pig.loadOk) {
        for(var i=0; i < nPigs; i++) {
            var x = randomF(0, 5);
            var y = randomF(0, 5);;

            x*=80;
            y*=80;

            drawPigs(x, y);
        }
    }

    if(chicken.loadOk) {
        for(var i=0; i < nChickens; i++) {
            var x = randomF(0, 5);
            var y = randomF(0, 5);;

            x*=80;
            y*=80;

            drawChickens(x, y);
        }
    }

    if(wolf.loadOk) {
        for(var i=0; i < nWolfs; i++) {
            var x = randomF(0, 5);
            var y = randomF(0, 5);

            x*=80;
            y*=80;

            drawWolfs(x, y);
        }
    }
}

function drawBackground() {
    paper.drawImage(villeBackgroung.image, 0, 0);
}

var villeBackgroung = {
    url: "./img/tile.png",
    loadOk: false
};

function loadBackground() {
    villeBackgroung.loadOk = true;
}

villeBackgroung.image = new Image();
villeBackgroung.image.src = villeBackgroung.url;
villeBackgroung.image.addEventListener("load", loadBackground);

//COWS
var cow = {
    url: "./img/cow.png",
    loadOk: false
};

function loadCows() {
    cow.loadOk = true;
    draw()
}

function drawCows(x, y) {
    paper.drawImage(cow.image, x, y);
}

cow.image = new Image();
cow.image.src = cow.url;
cow.image.addEventListener("load", loadCows);


//PIGS
var pig = {
    url: "./img/pig.png",
    loadOk: false
};

function loadPigs() {
    pig.loadOk = true;
    draw();
}

function drawPigs(x, y) {
    paper.drawImage(pig.image, x, y);
}

pig.image = new Image();
pig.image.src = pig.url;
pig.image.addEventListener("load", loadPigs);


//CHICKENS
var chicken = {
    url: "./img/chicken.png",
    loadOk: false
};

function loadChickens() {
    chicken.loadOk = true;
    draw();
}

function drawChickens(x, y) {
    paper.drawImage(chicken.image, x, y);
}

chicken.image = new Image();
chicken.image.src = chicken.url;
chicken.image.addEventListener("load", loadChickens);


//WOLFS
var wolf = {
    url: "./img/wolf.png",
    loadOk: false
};

function loadWolfs() {
    wolf.loadOk = true;
    draw();
}

function drawWolfs(x, y) {
    paper.drawImage(wolf.image, x, y);
}

wolf.image = new Image();
wolf.image.src = wolf.url;
wolf.image.addEventListener("load", loadWolfs);

function randomF(min, max) {
    var result = (Math.floor((Math.random() * (max-min+1)))+min);
    return result;
}