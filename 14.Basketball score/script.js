let homeDisplay = document.getElementById("home-d")
let guestDisplay = document.getElementById("guest-d")
let ans = 0
let ansg = 0
homeDisplay.textContent = ans
function addh1(){
    ans += 1;
    homeDisplay.textContent = ans
}

function addh2(){
    ans += 2;
    homeDisplay.textContent = ans
}

function addh3(){
    ans += 3;
    homeDisplay.textContent = ans
}
function addg1(){
    ansg += 1;
    guestDisplay.textContent = ansg
}

function addg2(){
    ansg += 2;
    guestDisplay.textContent = ansg
}

function addg3(){
    ansg += 3;
    guestDisplay.textContent = ansg
}