// // flip the cards using toggle
let cards = document.querySelectorAll('.flip-card')

function flipCard() {
    this.classList.toggle("flip")
}
cards.forEach((card) => card.addEventListener("click",flipCard))



// // don't let card flip back once flipped
function stopFlip() {
    this.classList.toggle("disabled")
}
cards.forEach((card) => card.addEventListener("click", stopFlip))




// // shuffle the cards
function shuffle() {
    cards.forEach((card) => {
        let randomShuffle = Math.floor(Math.random() * 33)
        card.style.order = randomShuffle
    })
} 
shuffle()

// // shuffle button shuffles
let button = document.querySelector('button')

button.addEventListener('click', function() {
    shuffle(cards)
}, false)





// // let only two cards be flipped over at one time





// // see if flipped cards are a match
// check if cards are match or not
// try using .isEqualNode()
// data attributes

function checkForMatch() {
    if(cards.dataset.image === cards.dataset.image) {
        disableCards()
        return
    }
    unFlipCards()
}

function disableCards() {
    cards.removeEventListener('click', flipCard)
    cards.removeEventListener('click', flipCard)
}

function unflipCards() {
    setTimeout(() => {
        this.classList.remove('flip')
        this.classList.remove('flip')
    }, 1500)
}

// cards.forEach((card) => card.addEventListener('click', flipCard))


  
  // for when cards match

  
  // for when cards don't match

  
  // disable cards temporarily

  
  //enable cards and disable matched cards







// let cardsChosen = []
// let cardsChosenId = []
// let cardsWon = []

// function checkForMatch() {
//     const optionOneId = cardsChosenId[0]
//     const optionTwoId = cardsChosenId[1]

//     if(optionOneId === optionTwoId) {
//         cards[optionOneId].setAttribute('src', 'images/akbar.jpg')
//         cards[optionTwoId].setAttribute('src', 'images/akbar.jpg')
//         cards[optionOneId].removeEventListener('click', flipCard)
//         cards[optionTwoId].removeEventListener('click', flipCard)
//         cardsWon.push(cardsChosen)
//     } else if (cardsChosen[0] === cardsChosen[1]) {
//         console.log('You found a match')
//         cards[optionOneId].setAttribute('src', 'images/boba.jpg')
//         cards[optionTwoId].setAttribute('src', 'images/boba.jpg')
//         cards[optionOneId].removeEventListener('click', flipCard)
//         cards[optionTwoId].removeEventListener('click', flipCard)
//         cardsWon.push(cardsChosen)
//     } else {
//         cards[optionOneId].setAttribute('src', 'images/akbar.jpg')
//         cards[optionTwoId].setAttribute('src', 'images/akbar.jpg')
//         alert('Sorry, try again')
//     }
// }

// function flippedCard() {
//     if (cardsInPlay[0] === cardsInPlay[1]) {
//         console.log('You found match')
//     } else {
//         console.log('Sorry, try again')
//     }
// }
// flippedCard()