function randomF(min, max) {
    var result = (Math.floor((Math.random() * (max-min+1)))+min);
    return result;
}



for(var i=0; i<10; i++) {
    var z = randomF(-5, 5);
    document.write(z+", ");
}