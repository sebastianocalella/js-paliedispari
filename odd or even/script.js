
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
    let resulte = "";

    console.log(userNumber);
    if (!(userNumber>0 && userNumber<=5)){
        resulte = 'per favore inserisci un numero compreso fra 1 e 5';
    } else if (document.getElementById('odd').checked && isOdd(sum)){
        resulte = 'complimenti hai vinto!';
    } else if(document.getElementById('even').checked && !isOdd(sum)){
        resulte = 'complimenti hai vinto!';
    } else {
        resulte = 'mi spiace ma hai perso :P';
    }
    document.getElementById('random-generated').innerHTML = "ho generato il numero " + randomValue;
    document.getElementById('answer').innerHTML = resulte;
});








// start.addEventListener(click,oddOrEven);

// function oddOrEven(number){
//     const userValue = parseInt(document.getElementById('user-number-input').value, 10);
// }
