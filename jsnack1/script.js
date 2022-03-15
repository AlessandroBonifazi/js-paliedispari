// Debug
console.log('JS OK!');

// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const word = prompt('input a word');

while (!word || word.length === 0) {
    word = prompt('input a word');
}

function checkPalindrome(string) {
    const len = word.length;

    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (word[i] !== word[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

const result = checkPalindrome(word);

console.log(result);