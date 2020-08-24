let inputVal = document.getElementsByClassName("input-number");
let pesanErr = document.getElementsByClassName("pesanErr");



function celToFaren(){

}

function farenToCel(){

}

function validInput(){
    let text = "";

    if (isNaN(inputVal) || inputVal < 1 || inputVal > 10) {
        text = "Input not valid";
     } else {
        text = "Input OK";
     }

    document.getElementById("pesanErr").innerHTML = text;
}

