var pakimages = [];
pakimages["CowShu"] = "CowShu.png";
pakimages["Poposho"] = "Poposho.png";
pakimages["Baconrad"] = "Baconrad.png";
pakimages["Wolfestein"] = "Wolfestein.png";

var collection = [];

class Pakiman {
    constructor(name, type, life, attack) {
        this.image = new Image();
        this.name = name;
        this.type = type;
        this.life = life;
        this.attack = attack;

        this.image.src = pakimages[this.name];
        collection.push(this);
    }

    speak() {
        window.alert(this.name);
    }

    show() {
        document.write("<strong><hr><br/>Name: " + this.name + "</strong><br/>");
        document.body.appendChild(this.image);
        document.write("<p>");
        document.write("<strong>Type: </strong>" + this.type + "</br>");
        document.write("<strong>Life: </strong>" + this.life + "</br>");
        document.write("<strong>Attack: </strong>" + this.attack + "</br>");
        document.write("</p><br/><hr/><br/>");
    }
}

var CowShu = new Pakiman("CowShu", "Earth", 100, 30);

var Poposho = new Pakiman("Poposho", "Air", 80, 50);

var Baconrad = new Pakiman("Baconrad", "Earth", 120, 40);

var Wolfestein = new Pakiman("Wolfestein", "fire", 70, 55);

/*function showAll() {
    for(var i=0; i<collection.length; i++) {
        collection[i].show();
    }
}*/

function showAll() {
    for(paki of collection) {
        paki.show();
    }
}

showAll();