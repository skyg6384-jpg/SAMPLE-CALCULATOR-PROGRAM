// CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function back(){
    display.value = display.value.slice(0, -1);
}

function squareRoot(){

    try{
        display.value = Math.sqrt(Number(display.value));
    }
    catch(error){
        display.value = "Error";
    }

}

function calculate(){

    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    } 
}