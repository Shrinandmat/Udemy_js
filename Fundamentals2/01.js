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
   return `${firstname} retires in ${retirement} years`;
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

const calcPrice = priceobj;

