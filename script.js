const userWord = prompt('inserire una parola per verificare se sia palindroma');

function checkPalindrome(word){
    const lenght = word.lenght;
    for (let i=0; i<lenght/2 ;i++){
        if (word[i] !== word[lenght - 1 - i]){
            return 'la parola inserita non è palindroma';
        }
    }
    return 'la parola inserita è palindroma!'
}

const answer = checkPalindrome(userWord);

console.log(answer);