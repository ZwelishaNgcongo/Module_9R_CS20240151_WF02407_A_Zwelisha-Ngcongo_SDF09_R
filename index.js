


let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = "" /* declared variable called message, assigned its value to an empty string */

let messageEl=document.getElementById("message-el") /* targeting message-el */
let sumEl= document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")

function getRandomCard()  { /* function to generate random cards */

    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}
/* let player = {              
    name: "Zwelisha", one way of accessing player name through the object
    chips: 200
} */
let userName= prompt("please enter your name");
let chips =prompt("please enter your chips value $"); /* used prompt to get user name + chips value */

let playerEl = document.getElementById("player-el")
playerEl.textContent = userName + ": $" + chips /* chips the user name and chips stored in text area of player-el */

function startGame(){
    isAlive = true
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    
    if (sum < 21) {
        message="Do you want to draw a new card? " /* conditions set for starting game */
    } else if (sum === 21) {
        message="Congrats! You've got Blackjack!"
        hasBlackJack=true
    } else {
        message="You're out of the game!"
        isAlive = false
    }
    cardsEl.textContent= "Cards: "
    for (let i = 0; i < cards.length; i++) {  /* for loop that renders out all cards */
        cardsEl.textContent += cards[i] +" "
    }

    sumEl.textContent="Sum:"+" "+sum /* displaying the sum total */
    messageEl.textContent=message
  
}

function newCard(){
    if (isAlive === true && hasBlackJack === false) { /* player receives new card when player is alive */
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }

    
}
