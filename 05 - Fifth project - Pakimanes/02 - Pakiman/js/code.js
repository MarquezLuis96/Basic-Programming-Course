var pakimages = [];
pakimages["CowShu"] = "CowShu.png";
pakimages["Poposho"] = "Poposho.png";
pakimages["Baconrad"] = "Baconrad.png";
pakimages["Wolfestein"] = "Wolfestein.png";

class Pakiman {
    constructor(name, type, life, attack) {
        this.image = new Image();
        this.name = name;
        this.type = type;
        this.life = life;
        this.attack = attack;

        this.image.src = pakimages[this.name];
    }

    speak() {
        window.alert(this.name);
    }
}

var cowShu = new Pakiman("CowShu", "Earth", 100, 30);

var poposho = new Pakiman("Poposho", "Air", 80, 50);

var baconrad = new Pakiman("Baconrad", "Earth", 120, 40);

var wolfestein = new Pakiman("Wolfestein", "fire", 70, 55);