const randomValue = Math.floor(Math.random()*5 + 1);

const start = document.getElementById('play');

function isOdd(number){
    if (number%2 === 1){
        return true
    }
    return false
}

const example = 4;
const sum = randomValue + example;
const isoddtest = isOdd(sum);

console.log(randomValue);
console.log(example);
console.log(sum);
console.log(isoddtest);












// start.addEventListener(click,oddOrEven);

// function oddOrEven(number){
//     const userValue = parseInt(document.getElementById('user-number-input').value, 10);
// }
