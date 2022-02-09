
let cards = document.querySelectorAll
('.flip-card')

let cardFlipped = false
let card1 = null
let card2 = null
// let stopFlip = false


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


// // don't let card flip back once flipped
// function stopFlip() {
//     this.classList.toggle('disabled')
// }
// cards.forEach((card) => {
//     card.addEventListener('click', stopFlip)
// })

// create empty Array to hold two chosen cards
// within click event (flipCard) push event.target.id for the two cards
// remove event listener


// dont let card flip after two cards have been flipped
// function stopFlip() {
//     this.classList.toggle('disabled')

//     let len = cards.length
//     if (len === 2) {
//         cards.forEach((card) => {
//             card.removeEventListener('click',flipCard)
//         })
//     }
// }


// // shuffle the cards
function shuffle() {
    cards.forEach((card) => {
        let randomShuffle = Math.floor(Math.random() * 33)
        card.style.order = randomShuffle
    })
} 
shuffle()


// // let only two cards be flipped over at one time
// keep track of how many cards have been flipped
// let flippedCard = false -- move up

// let flipCount = 0
// function flipCounter () {
//     if (flipCount < 2) {
//         flipCount++
//     }
// }



// function flippedCard() {
//     if (flippedCards[0] === flippedCards[1]) {
//         console.log('You found match')
//     } else {
//         console.log('Sorry, try again')
//     }
// }
// flippedCard()


// // see if flipped cards are a match
// check if cards are match or not
// try using .isEqualNode() or data attributes
// if using data attributes
// let cards = document.querySelectorAll('.flip-card')

// cards.dataset.image-- correct

// [cards.index.dataImage]

// const cards = document.querySelectorAll('.flip-card')
// let card1 = document.querySelector('flip-card').isSameNode
// let card2 = document.querySelector('flip-card').isSameNode
// let x = card1.isEqualNode(card2)

// let card1
// let card2

//need to check if two cards have been clikced before running this function


function pauseFlip() {
    cards.forEach((card) => {
        card.addEventListener('click',flipCard)
})
}

function checkForMatch() {
    console.log(card1.dataset.image)
    console.log(card2.dataset.image)
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
    resetGame()
}


// when cards don't match
// lockBoard = true -- moveup

// unflip cards if no match
function unflipCards() {
    stopFlip = true
    setTimeout(() => {
        card1.classList.remove('flip')
        card2.classList.remove('flip')
        resetGame()
    }, 900)
}



// reset
function resetGame() {
    cardFlipped = false
    stopFlip = false
    card1 = null
    card2 = null
}




// // shuffle button shuffles-- got rid of
// let button = document.querySelector('button') -- move up
// let button = document.querySelector('button')

// button.addEventListener('click', function() {
//     shuffle(cards)
// }, false)



// function flippedCard() {
//     if (cardsInPlay[0] === cardsInPlay[1]) {
//         console.log('You found match')
//     } else {
//         console.log('Sorry, try again')
//     }
// }
// flippedCard()
