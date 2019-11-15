var screen = document.getElementById("screen");
var calculator = document.getElementById("calculator");
var operators = document.getElementsByClassName("operator");


screen.onkeyup = keyUp;
var q = " ";

function keyUp(e) {
    var x = e.key;
    var regexNumbers = /^[0-9]+$/;
    var regexSigns = new RegExp(/[\.\+\-\/\*]+$/g);

    if (x.match(regexSigns) || x.match(regexNumbers)) {
         q=screen.value;

    } else {
        screen.value = q;
        error();
    }
}
function input(i) {
    screen.value = screen.value + i;


    //Animate js
    calculator.style.width = "325px";
    setTimeout(function () {
        for (var y = 0; y < operators.length; y++) {
            operators[y].style.display = "block";


        }

    }, 700);

    setTimeout(function () {
        for (var y = 0; y < operators.length; y++) {
            operators[y].style.opacity = "1";
            operators[y].style.pointerEvents = "auto";


        }

    }, 800);


}

function result() {
    if (eval(screen.value) != undefined) {
        screen.value = eval(screen.value);

    } else {
        screen.value = '';
    }
}

function reset() {

    screen.value = "";

    //Animate js
    for (var y = 0; y < operators.length; y++) {
        operators[y].style.opacity = "0.4";
        operators[y].style.pointerEvents = "none";

    }


}

function error() {


    screen.style.backgroundColor = "#9e4249"
    setTimeout(function () {
        screen.style.backgroundColor = "#d3545d";
    }, 300);
}

