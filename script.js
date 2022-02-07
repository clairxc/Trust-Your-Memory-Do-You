// make divs into an array



// shuffle the cards
function shuffle(elems) {
 
    allElems = (function(){
	var ret = [], l = elems.length;
	while (l--) { ret[ret.length] = elems[l]; }
	return ret;
    })();
 
    var shuffled = (function(){
        var l = allElems.length, ret = [];
        while (l--) {
            var random = Math.floor(Math.random() * allElems.length),
                randEl = allElems[random].cloneNode(true);
            allElems.splice(random, 1);
            ret[ret.length] = randEl;
        }
        return ret; 
    })(), l = elems.length;
 
    while (l--) {
        elems[l].parentNode.insertBefore(shuffled[l], elems[l].nextSibling);
        elems[l].parentNode.removeChild(elems[l]);
    }
 
}

let button = document.querySelector('button')

button.addEventListener('click', function() { shuffle(document.querySelectorAll('#shuffle > div') ) }, false);



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