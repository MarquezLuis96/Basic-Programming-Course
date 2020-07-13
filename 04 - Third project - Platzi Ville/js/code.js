var vp = document.getElementById("farm");
var paper = vp.getContext("2d");

function draw() {
    if (villeBackgroung.loadOk == true){
        drawBackground();
    }

    if (cow.loadOk) {
        drawCows();
    }

    if(pig.loadOk) {
        drawPigs();
    }

    if(chicken.loadOk) {
        drawChickens();
    }

    if(wolf.loadOk) {
        drawWolfs();
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
    draw();
}

function drawCows() {
    paper.drawImage(cow.image, 10, 10);
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

function drawPigs() {
    paper.drawImage(pig.image, 250, 150);
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

function drawChickens() {
    paper.drawImage(chicken.image, 180, 360);
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

function drawWolfs() {
    paper.drawImage(wolf.image, 250,250);
}

wolf.image = new Image();
wolf.image.src = wolf.url;
wolf.image.addEventListener("load", loadWolfs);

function randomF(min, max) {
    var result = (Math.floor((Math.random() * (max-min+1)))+min);
    return result;
}