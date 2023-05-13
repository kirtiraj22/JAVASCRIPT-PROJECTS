let counter = 0;
document.getElementById("field").innerHTML = counter;
function CountIncrease(){
    counter++;
    document.getElementById("field").innerHTML = counter;
}

function CountDecrease(){
    counter--;
    document.getElementById("field").innerHTML = counter;
}