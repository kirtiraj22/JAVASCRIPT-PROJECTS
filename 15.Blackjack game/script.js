let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById('message-el')

let sumEl = document.getElementById('sum-el')

let cardsEl = document.getElementById("cards-el")

//creating a player object
let player = {
    name : "Per",
    chips : 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame();
}

function getRandomCard(){
    let randomnumber = Math.floor((Math.random() * 13)) + 1;
    if(randomnumber == 1)
        return 11
    else if(randomnumber == 10 || randomnumber == 11 || randomnumber == 12)
        return 10;
    return randomnumber;
}

/* NOTE: in black jack game jack queen and king are worth 10 
and ace is worth 11*/

function renderGame(){
    cardsEl.textContent = "Cards : " 

    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum : " + sum
    if(sum < 21){
        message = "Do you want to draw a new card?"
    }
    else if(sum === 21){
        message = "wohoo! you've got Blackjack!"
        hasBlackJack = true
    }
    else{
        message = "You're out of the game"
        isAlive = false
    }

    messageEl.textContent = message
}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}