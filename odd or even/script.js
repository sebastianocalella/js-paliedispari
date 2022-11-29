
function isOdd(number){
    if (number%2 === 1){
        return true
    }
    return false
}


const start = document.getElementById('play');

start.addEventListener('click', function(){

    const randomValue = Math.floor(Math.random()*5 + 1);
    const userNumber = parseInt(document.getElementById('user-number-input').value);
    const sum = randomValue + userNumber;

    console.log(userNumber);
    if (!(userNumber>0 && userNumber<=5)){
        document.getElementById('answer').innerHTML = 'per favore inserisci un numero compreso fra 1 e 5';
    } else if ((document.getElementById('odd').checked && isOdd(sum)) || (document.getElementById('even').checked && !isOdd(sum))){
        console.log('oh yeah');
        document.getElementById('answer').innerHTML = 'complimenti hai vinto!';
    } else {
        document.getElementById('answer').innerHTML = 'mi spiace ma hai perso :P';
    }
});








// start.addEventListener(click,oddOrEven);

// function oddOrEven(number){
//     const userValue = parseInt(document.getElementById('user-number-input').value, 10);
// }
