var txtF1 = document.getElementById("textField1");

var btn = document.getElementById("btn1");
btn.addEventListener("click", runFizzBuzz);

function print(str) {
    var prueba = document.getElementById("FizzBuzz");
    document.getElementById("FizzBuzz").innerHTML = str;
}

function divisible(n, div) {
    if(n%div==0) {
        return true;
    }
    else {
        return false;
    }
}

function fizzBuzz(n, str) {

    if(divisible(n,3) && divisible(n,5) ) {
        str += n + " - FizzBuzz";
    }
    else if (divisible(n,3)) {
        str += n + " - Fizz";
    }
    else if(divisible(n,5)) {
        str += n + " - Buzz";
    }else {
        str += n;
    }

    str += "<br/>";

    return str;
}

function runFizzBuzz() {
    var n = parseInt(txtF1.value);
    var str = "";
    for(i=1; i<=n; i++) {
        str = fizzBuzz(i, str);
    }
    print(str);
}