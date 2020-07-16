class Pakiman {
    constructor(name, type, life, attack) {
        this.name = name;
        this.type = type;
        this.life = life;
        this.attack = attack;
    }
}

var cowShu = new Pakiman("CowShu", "Earth", 100, 30);
var chikenPaThai = new Pakiman("chikenPaThai", "Air", 80, 50);
var baconrad = new Pakiman("Baconrad", "Earth", 120, 40);
var wolfestain = new Pakiman("Wolfestain", "fire", 70, 55);

console.log(cowShu);