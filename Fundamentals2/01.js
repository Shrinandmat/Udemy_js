'use strict';

let hasDriverLicence = false;
const passTest = true;

// if(passTest) hasDriversLicence = true;
// After using strict mode you can see the errors on console
if(passTest) hasDriverLicence = true;

if(hasDriverLicence) console.log('I can drive car. : D')

// const private = 534;

function Fruitprocessor(apples , oranges){
    console.log(apples,oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    // console.log(juice);
     return juice;
}

const result = Fruitprocessor(2,0);
console.log(result);

const AppleOrangeJuice = Fruitprocessor(3,4);


// Function Declaration
function calcAge(birthyear){
    const age = 2037 - birthyear;
    return age;
}

const age = calcAge(2002);
console.log(age);


// Function Expression
const calcAge2 = function(birthyear){
 return 2037 - birthyear;
}

const age2 = calcAge2(2003);
console.log(age2);

console.log(age , age2);

// Arrow Function
const calcAge3 = birthyear2 => 2037 - birthyear2;
// console.log(calcAge3);
const age3 = calcAge3(2001);
console.log(age3);

const yearsuntilRetirement = birthyear3 => {
    const age = 2037 - birthyear3;
    const retirement = 65 - age;
    return retirement;
}

console.log(yearsuntilRetirement(1122));



const yearsuntilRetirement2 = (birthyear3,firstname) => {
    const age = 2037 - birthyear3;
    const retirement = 65 - age;
    // return retirement;
   return `${firstname} retires in ${retirement}yearn`;
}
const str = yearsuntilRetirement2(2002,'Shrinand');
console.log(str);
console.log(yearsuntilRetirement(1122,'Jonas'));

function cutFruitpieces(Fruit){
    return Fruit*4;
}


function Fruitprocessor(apples , oranges){

    const applepieces = cutFruitpieces(apples);
    const orangepieces = cutFruitpieces(oranges);

    console.log(apples,oranges);
    const juice = `Juice with ${applepieces} applepieces and ${orangepieces} orangepieces`;
    // console.log(juice);
     return juice;
}

console.log(Fruitprocessor(2,3));

const yearsuntilRetirement3 = (birthyear3,firstname) => {
    const age = 2037 - birthyear3;
    const retirement = 65 - age;
    // return retirement;
    if(retirement > 0){
        return retirement;}
        else{
            return -1;
    }
   
}

console.log(yearsuntilRetirement3(2002,'Mike'));



// Function Declaration
function calcPrice(calcAge){
    return calcPrice - 50;
}

console.log(calcPrice(100));

const price = function(pprice){
    return pprice - 50;

}
console.log(price(200));

const calcPrice5 = priceobj =>  priceobj - 50;
console.log(calcPrice5(200));


const avg = (a,b,c) => { 
    return ( a + b + c ) /3 };

console.log(avg(2,2,2));


let scoreDolphins = (33,45,66);
let scoreKoalas = (45,34,78);


console.log(scoreDolphins,scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
      console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
      console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
    } else {
      console.log('No team wins...');
    }
  }
  checkWinner(scoreDolphins, scoreKoalas);
  
  checkWinner(576, 111);

  // Test 2
scoreDolphins = avg(85, 54, 41);
scoreKoalas = avg(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

const friends = ['Micheal' , 'Steve' , 'Peter'];

console.log(friends);

const years = new Array(2023,1944,2056,1977);
console.log(years);
console.log(years[0]);
console.log(years.length);
console.log(friends[friends.length-1]);

friends[2] = 'Rayan';
// We have declared array with const but still we are able to change the element
console.log(friends);

// friends = ['Bob','jonas'];


const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);


const year = [2012,1024,1978,1934];
console.log(year);

 calcAge = function (birthYeah) {
    return 2037 - birthYeah;
  }

console.log(calcAge(2023));

const yearn = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(yearn[0]);
const age20 = calcAge(yearn[1]);
const  age30 = calcAge([yearn.length - 1]);
console.log(age1, age20, age30);

const ages = [calcAge(yearn[0]) , calcAge(yearn[1]) , calcAge(yearn[yearn.length - 1])];
console.log(ages);

const friends2 = ['Micheal' , 'Steve' , 'Peter'];
friends2.push('John');
console.log(friends2);
friends2.unshift('Johnny');
console.log(`Popped : ${friends2.pop()}`);
console.log(friends2);
friends2.shift();
console.log(friends2);
console.log(friends.indexOf('Steve'));
console.log(friends.indexOf('Bob'));
console.log(friends.includes('Steve'));

if(friends.includes('Peter')){
    console.log(`You have a friend called Peter`);
}

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const calcTip2 = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);