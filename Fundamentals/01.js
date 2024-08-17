console.log("Hello World");


$name = "Shrinand";

console.log($name); // we can use $

let PI = 3.1415; // Use uppercase for real constants


let country = 'Portugal';
let continent = 'Europe';
let population = 10;

console.log(country);
console.log(continent);
console.log(population);

// There are 7 primitive datatypes

// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt

let isJavascriptFun = true;
console.log(isJavascriptFun);
console.log(typeof 34);
console.log(typeof "Name");
console.log(typeof null);
console.log(typeof undefined);
sym = Symbol("YES");
console.log(sym);
nn = BigInt(1223);
console.log(nn);
console.log(typeof 'Jonas');

let year;
console.log(year);
console.log(typeof year);

let age = 30;
age = 31;
console.log(age);

// const n;

// const b = 45;
// b = 30;

const currentage = 2037 - 1881;
const currentage2 = 2037 - 1991;
console.log(currentage,currentage2);

const isFullAge = currentage > 10;
console.log(isFullAge);

const now = 2024 - 2014;
console.log(now - 2 >= now - 2);

let x = y = 25-10-5;
console.log(x,y);

// - has left to right precedence and * has right to left precedence
const massMark = 20;
const heightMark = 34;
const massJohn = 35;
const heightJohn = 50;

// const BMIMark = massMark/(heightMark**2);
// const BMIJohn = massJohn/(heightJohn*heightJohn);
// const largeMarkBMI = BMIMark > BMIJohn;
// console.log(largeMarkBMI);
// console.log(BMIMark,BMIJohn);

const FirstName = 'Jonas';
const job = 'Teacher'
const Birthyear = 2002;
const cyear = 2024;
const aged = cyear - Birthyear;
const Jonas = "I'am " + FirstName + " a " + aged +" aged " + job;
console.log(Jonas);

// Template Literals'
console.log(`I'm ${FirstName} a ${aged} aged ${job}`);

console.log(`Just a regular String`);
console.log(`
    String'
   multiple'
    line`);

const age2 = 16;
const isOldEnough = age2 >= 18;
if(isOldEnough){
    console.log(`Sarah can drive car 🚗`);
}else{
    const yearsleft = 18 - age2;
    console.log(`Sarah is too young. wait another ${yearsleft} years`);
}
// Use window + . for using emojis

const birthyear = 2012;
let centuary;
if(birthyear < 2000)
{
    centuary = 20;
}else{
    centuary = 21;
}
console.log(centuary);


const BMIMark = massMark/(heightMark**2);
const BMIJohn = massJohn/(heightJohn*heightJohn);
const largeMarkBMI = BMIMark > BMIJohn;
console.log(largeMarkBMI);
console.log(BMIMark,BMIJohn);
if(BMIMark > BMIJohn){

console.log(`Mark's BMI is greater than John's viz ${BMIMark}`);
}else{
console.log(`John's BMI is greater than Mark's viz ${BMIJohn}`);
}


// Type Conversion
const inputyear = '1991';
console.log(Number(inputyear) , inputyear);
console.log(Number(inputyear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23));

// Type Coersion'
console.log('I am ' + 23 + ' years old.') // In this case number is converted in string

console.log('23' - '10' + 9); // In this case string getting converted to number

console.log('23' * '2'); // In this case string getting converted to number

let n = '1' + 1;
n = n - 1;
console.log(n);

console.log(2+3+4 + '9');

console.log('10' - '4' - '3' - 2 + '5');

// Type Coersion may lead to bugs so we don't rely on type Coersion


