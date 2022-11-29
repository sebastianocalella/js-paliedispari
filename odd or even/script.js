const randomValue = Math.floor(Math.random()*5 + 1);

console.log(randomValue);

const start = document.getElementById('play');

function isOdd(number){
    if (number%2 === 1){
        return true
    }
    return false
}












// start.addEventListener(click,oddOrEven);

// function oddOrEven(number){
//     const userValue = parseInt(document.getElementById('user-number-input').value, 10);
// }
