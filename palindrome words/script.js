const userWord = prompt('inserire una parola per verificare se sia palindroma');

function checkPalindrome(word){
    const length = word.length;
    for (let i=0; i<length/2 ;i++){
        if (word[i] !== word[length - (i+1)]){
            return false;
        }
    }
    return true;
}

const answer = checkPalindrome(userWord) ? 'la parola è palindroma' : 'la parola non è palindroma';

console.log(answer);

const userWordDom = document.querySelector('.js-content');
const userWordElement = document.createElement("span");
userWordElement.innerHTML = answer;
userWordDom.append(userWordElement);