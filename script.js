// flip the cards
const cards = document.querySelectorAll('.flip-card')

function flipCard() {
    this.classList.toggle("flip")
}
cards.forEach((card) => card.addEventListener("click",flipCard))



// // make divs into an array
// let divArray = Array.from(document.querySelectorAll('.flip-card'))

// let shuffleArray = (divArray) => {
//     for (let i = divArray.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         const temp = divArray[i];
//         divArray[i] = divArray[j];
//         divArray[j] = temp;
//     }
// }

// let newArr = []
// const reverseArray = (arr) => {
//     for(let i = arr.length - 1; i >= 0; i--) {
//         newArr.push(arr[i])
//     }
//     return newArr
// }

// console.log(reverseArray(divArray))

// // shuffle the cards *this works
// const shuffle = (elems) => {
 
//     allElems = (function(){
// 	let divArray = [], i = elems.length
// 	while (i--){
//         divArray[divArray.length] = elems[i] 
//     }
// 	return divArray;
//     })()
 
//     let shuffled = (function(){
//         let i = allElems.length, divArray = []
//         while (i--) {
//             let random = Math.floor(Math.random() * allElems.length),
//                 randEl = allElems[random].cloneNode(true)
//             allElems.splice(random, 1)
//             divArray[divArray.length] = randEl
//         }
//         return divArray
//     })(), i = elems.length
 
//     while (i--) {
//         elems[i].parentNode.insertBefore(shuffled[i], elems[i].nextSibling)
//         elems[i].parentNode.removeChild(elems[i])
//     }
// }

// // shuffle button shuffles
// let button = document.querySelector('button')

// button.addEventListener('click', function() {
//     shuffleArray(document.querySelectorAll('#shuffle > div'))
// }, false)



// let shuffle1 = (arr) => {
//     for (i = 0; i < array.length; i++) {
//         x = Math.floor(Math.random() * array.length)
//         y = Math.floor(Math.random() * array.length)
//         if (x === y) {
//             continue
//         }
//         temp0 = array[x]
//         array[x] = array[y]
//         array[y] = temp0
//     }
//     return arr
// }
// shuffle1(array)

// function shuffle(array) {
//     for (i = 0; i < array.length; i++) {
//         let temp0 = array[Math.floor(Math.random() * array.length)];
//         let temp1 = array[Math.floor(Math.random() * array.length)];
//         console.log(temp0); // select random item work correctly
//         console.log(temp1); // select random item work correctly
//         if (temp0 === temp1) { //for dont change array[index] with save value!!!
//             continue;
//         }
//         temp2 = temp0;
//         temp0 = temp1;
//         temp1 = temp2;
//         console.log(temp0); 
//         console.log(temp1); 
//         console.log(temp2); 
//     }
//     return array
// }
// shuffle()


// const shuffle = (divArray) => {
//     let currentDiv = divArray.length, randomDiv
//     while(currentDiv != 0) {
//         randomDiv = Math.floor(Math.random() * currentDiv)
//         currentDiv--;
//         [divArray[currentDiv],divArray[randomDiv]] = [divArray[randomDiv],divArray[currentDiv]]
//     }
//     return divArray
// }

// let divArray = Array.from(document.querySelectorAll('#shuffle'))
// shuffle(divArray)
// console.log(divArray)





// let shuffle = () => {
//     let container = document.querySelector(".card-container")
//     let elementsArray = Array.prototype.slice.call(container.getElementByClassName('flip-card'))
//         elementsArray.forEach(function(element) {
//             container.removeChild(element)
//     })
//     shuffleArray(elementsArray)
//     elementsArray.forEach(function(element) {
//         container.appendChild(element)
//     })
// }

// let shuffleArray = () => {
//     for (let i = array.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1))
//         let temp = array[i]
//         array[i] = array[j]
//         array[j] = temp
//     }
//     return array;
// }