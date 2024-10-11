let number = 153; 
let n = number; 

let sumFirstN = (n * (n + 1)) / 2;

let table = "";
for (let i = 1; i <= 10; i++) {
    table += `${n} * ${i} = ${n * i}\n`;
}

let isPrime = true;
if (n < 2) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }
}

let factors = [];
for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
        factors.push(i);
    }
}

let sumOfDigits = 0;
let temp = number;
while (temp > 0) {
    sumOfDigits += temp % 10;
    temp = Math.floor(temp / 10);
}

let isArmstrong = false;
let armstrongSum = 0;
temp = number;
while (temp > 0) {
    let digit = temp % 10;
    armstrongSum += Math.pow(digit, 3);
    temp = Math.floor(temp / 10);
}
if (armstrongSum === number) {
    isArmstrong = true;
}

console.log(`Number: ${number}`);
console.log(`Sum of its digits: ${sumOfDigits}`);
console.log(`Is it an Armstrong number? ${isArmstrong ? 'Yes' : 'No'}`);
console.log(`Is it a prime number? ${isPrime ? 'Yes' : 'No'}`);
console.log(`Factors: ${factors.join(', ')}`);
