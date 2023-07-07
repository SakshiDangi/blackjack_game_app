let cards = [] //array - ordered list of items
let sum = 0
let isAlive = false  //cash out!
let message = " "
let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
console.log(cards)

let player = {
     name: "Per",
     chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": ₹" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard() 
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard] 
    sum = [firstCard + secondCard]
    renderGame()
}

function renderGame() {
    // render out firstCard & secondCard
    cardsEl.textContent = "Cards: "
    // create for loop that render out all the cards 
    for(let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    // render out all cards
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to Draw a new Card?"
           
    } else if (sum === 21) {
        message = "Wohoo! You've got blackjack!"
    } else {
        message = "You're out of the game!"
        isAlive = false 
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) { 
        let card = getRandomCard()
        sum += card
        console.log("Drawing a new Card")
        cards.push(card)
        console.log(cards)
        renderGame()
    }
    
}

