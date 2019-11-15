var screen = document.getElementById("screen");
var calculator = document.getElementById("calculator");
var operators = document.getElementsByClassName("operator");
screen.onkeyup = keyUp;
var q=" "
var a=" "
var z = "";

function keyUp(e) {
    var x = e.key;
    console.log(x)

    var regexNumbers = /[0-9\+\*\-\%\/]+/gm;
    if (x.match(regexNumbers) || x == "Backspace") {
        z = screen.value;

    } else if (x == "Enter" || x == "=") {
        screen.value = z;
        result()
    } else {
        screen.value = z;
        error();
    }
}

function input(i) {
    screen.value = screen.value + i;
    z = screen.value;
}

function result() {
    if (eval(screen.value) == undefined) {
        q = " ";
        screen.value = "Error";

    } else if(isNaN(eval(screen.value))){
        screen.value="Error"
    }

    else {
        history(screen.value, eval(screen.value))
        screen.value = eval(screen.value);
    }
}

function reset() {
    z = "";
    screen.value = "";
}

function error() {


    screen.style.backgroundColor = "#9e4249"
    setTimeout(function () {
        screen.style.backgroundColor = "#00000096";
    }, 300);
}

// function animation() {
//     if (screen.value.length > 0) {
//         calculator.style.width = "325px";
//         setTimeout(function () {
//             for (y = 0; y < operators.length; y++) {
//                 operators[y].style.display = "block";
//
//
//             }
//
//         }, 700);
//
//         setTimeout(function () {
//             for (y = 0; y < operators.length; y++) {
//                 operators[y].style.opacity = "1";
//                 operators[y].style.pointerEvents = "auto";
//
//
//             }
//
//         }, 800);
//     } else if (screen.value.length == 0){
//         for (y = 0; y < operators.length; y++) {
//             operators[y].style.opacity = "0.4";
//             operators[y].style.pointerEvents = "none";
//
//         }
//
//
//     }
//
//
// }

function history(a,b) {
    var para = document.createElement("P");
    para.innerHTML = a + "="+b;
    document.getElementById("history").appendChild(para);

}

function backSpace() {
    screen.value= screen.value.substring(0, screen.value.length - 1);

}


