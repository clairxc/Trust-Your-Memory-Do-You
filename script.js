// declare game variables
let cards = document.querySelectorAll
('.flip-card')

let cardFlipped = false
let card1 = null
let card2 = null


// audio
let sound = document.querySelector("audio")
let soundButton = document.querySelector("i")

soundButton.addEventListener('click', () => {
    if (sound.paused === true){
        sound.volume = 0.2      
        sound.play()
    } else {
        sound.pause()
    }
})


// whenever click event is fired, execute flipCard()
function flipCard() {

    // add flip class  using toggle
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
        setTimeout(checkForMatch, 600)
    }
}

// attach eventListener to each card using forEach
cards.forEach((card) => {
    card.addEventListener('click',flipCard)
})


// shuffle the cards
function shuffle() {
    cards.forEach((card) => {
        let randomShuffle = Math.floor(Math.random() * 33)
        card.style.order = randomShuffle
    })
} 
shuffle()


// shuffle button
let button = document.getElementById("shuffle-button")

button.addEventListener('click', function() {
    shuffle(cards)
}, false)


// let only two cards be flipped over at one time
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
        setTimeout(disableCards,600)
        setTimeout(pauseFlip, 900)
    } else {
        unflipCards()
        setTimeout(pauseFlip, 900)
    }
}


// stop flip if cards are match
function disableCards() {
    // card1.classList.add('blah')
    // console.log('match removed')
    // console.log(card1)
    // console.log(card2)
    card1.style.visibility = "hidden";
    card2.style.visibility = "hidden";
    // card1.removeEventListener('click', flipCard)
    // card2.removeEventListener('click', flipCard)
    cardFlipped = false
}


// unflip cards if no match
function unflipCards() {
    setTimeout(() => {
        card1.classList.remove('flip')
        card2.classList.remove('flip')
    }, 600)
}


// function animateShake() {
//     if (card2.classList.remove('flip') === true) {

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
            card.style.visibility = "visible"
        }) 
    shuffle()
}


// reset button
let resetButton = document.getElementById("reset")

resetButton.addEventListener('click', resetGame)
