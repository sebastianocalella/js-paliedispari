const userWord = prompt('inserire una parola per verificare se sia palindroma');

function checkPalindrome(word){
    const length = word.length;
    for (let i=0; i<length/2 ;i++){
        if (word[i] !== word[length - (i+1)]){
            return 'la parola inserita non è palindroma';
        }
    }
    return 'la parola inserita è palindroma!'
}

const answer = checkPalindrome(userWord);

console.log(answer);

const userWordDom = document.querySelector('.js-content');
const userWordElement = document.createElement("span");
userWordElement.innerHTML = answer;
userWordDom.append(userWordElement);