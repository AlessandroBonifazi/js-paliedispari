// Debug
console.log('JS OK!');

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.



const choice = prompt('even or odd?');
const userChoice = choice.toLocaleLowerCase();
console.log('your choice: ' + userChoice);
const userNumber = parseInt(prompt('input a number between 1 and 5'))

// Generate random number
function genRandomNum(min, max) {
    const range = max - min + 1;
    const generatedNumber = Math.floor(Math.random() * range) + min;
    return generatedNumber;
}

const randomResult = genRandomNum(1, 5);
console.log('random number: ' + randomResult);
console.log('your number: ' + userNumber);

// Sum function
function sumNumbers(number) {
    const sum = randomResult + userNumber;
    return sum;
}

const sumResult = sumNumbers();
console.log('sum: ' + sumResult);

// Check if sum is even or odd
function checkEvenOdd(message) {
    if (sumResult % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}

// Check result
const result = checkEvenOdd();

if (result === userChoice) {
    console.log('You Win!');
} else {
    console.log('You Loose!');
}