
let cards = document.querySelectorAll
('.flip-card')

let cardFlipped = false
let card1 = null
let card2 = null

// // shuffle button
let button = document.getElementById("shuffle-button")

button.addEventListener('click', function() {
    shuffle(cards)
}, false)

// whenever click event is fired, execute flipCard()
function flipCard() {
    // console.log('This is working')
    // console.log(this)

    // flip the cards using toggle
    this.classList.toggle('flip')

    // conditions for card flip
    if (!cardFlipped) {
        cardFlipped = true
        card1 = this
        // console.log(cardFlipped)
        // console.log(card1)
    } else {
        cardFlipped = false
        card2 = this
        // console.log(card1)
        // console.log(card2)

    // add conditional for card1 and card2 to removeEventListener
    if (card1 != null && card2 != null) {
        cards.forEach((card) => {
            card.removeEventListener('click',flipCard)
            })
        } 
        // need to run check for match
        setTimeout(checkForMatch, 900)
    }
}

// attach eventListener to each card using forEach
cards.forEach((card) => {
    card.addEventListener('click',flipCard)
})

// // shuffle the cards
function shuffle() {
    cards.forEach((card) => {
        let randomShuffle = Math.floor(Math.random() * 33)
        card.style.order = randomShuffle
    })
} 
shuffle()

// // let only two cards be flipped over at one time

// need to pause the flips
function pauseFlip() {
    cards.forEach((card) => {
        card.addEventListener('click',flipCard)
    })
}

// without setTimeout, cards can be clicked more than two in a row, creates bugs
function checkForMatch() {
    // console.log(card1.dataset.image)
    // console.log(card2.dataset.image)
    if (card1.dataset.image === card2.dataset.image) {
        disableCards()
        setTimeout(pauseFlip, 1000)
    } else {
        unflipCards()
        setTimeout(pauseFlip, 1000)
    }
}

// stop flip if cards are match
function disableCards() {
    card1.removeEventListener('click', flipCard)
    card2.removeEventListener('click', flipCard)
    cardFlipped = false
    // resetGame()
}


// when cards don't match

// unflip cards if no match
function unflipCards() {
    stopFlip = true
    setTimeout(() => {
        card1.classList.remove('flip')
        card2.classList.remove('flip')
        // resetGame()
    }, 900)
}

// function announceWin() {
//     if (flipCount === 32) {
//         announceWin.innterText = 'YOU DID IT!!'
//         resetGame()
//     }
// }

// reset

function resetGame() {
    console.log(`reset button clicked`)
    cardFlipped = false
    card1 = null
    card2 = null
    let endGame = document.querySelectorAll('.flip')
        endGame.forEach(card => {
            card.classList.remove('flip')
        }) 
    shuffle()
}

// reset button
let resetButton = document.getElementById("reset")

resetButton.addEventListener('click', resetGame)
