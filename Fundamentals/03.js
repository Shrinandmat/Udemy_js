const hasDriverlicence = true;
const hasGoodvision = true;

console.log(hasDriverlicence && hasGoodvision);
console.log(hasDriverlicence || hasGoodvision);

const shouldDrive = hasDriverlicence && hasGoodvision;

if(shouldDrive){
    console.log('Sarah is able to Drive');

}else{
    console.log('Sarah is not able to drive');
}
const isTired = true;

if(hasDriverlicence && hasGoodvision && !isTired){
    console.log(`Sarah is able to drive`);
}

const scoreDolphins = (96 + 108 + 89)/3;
const scoreKoalas = (81 + 98 + 101)/3;

console.log(scoreDolphins,scoreKoalas);


if(scoreDolphins > scoreKoalas ){
    console.log('Dolphins won the trophy');
} else if(scoreKoalas > scoreDolphins){
    console.log('Koalas won the trophy 🎉');
} else if(scoreDolphins == scoreKoalas){
    console.log('Both won the trophy 🎉');
} else{
    console.log('Noone wins the trophy 😥');
}

// switch

const day = 'monday';

switch (day) {
    case 'monday': // day === 'monday'
      console.log('Plan course structure');
      console.log('Go to coding meetup');
      break;
    case 'tuesday':
      console.log('Prepare theory videos');
      break;
    case 'wednesday':
    case 'thursday':
      console.log('Write code examples');
      break;
    case 'friday':
      console.log('Record videos');
      break;
    case 'saturday':
    case 'sunday':
      console.log('Enjoy the weekend :D');
      break;
    default:
      console.log('Not a valid day!');
  }
  
  if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
  } else if (day === 'tuesday') {
    console.log('Prepare theory videos');
  } else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
  } else if (day === 'friday') {
    console.log('Record videos');
  } else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
  } else {
    console.log('Not a valid day!');
  }


  // Statements and Expressions
3 + 4
1991
true && false && !false

if (23 > 10) {
  const str = '23 is bigger';
}
// all that produces values as output are expressions and the statements are sentences that getting printed

  ////////////////////////////////////
// The Conditional (Ternary) Operator
const age = 23;
// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink =
 age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

// It is called Ternary because it has 3 parts condition ? if : else


let drink2;
if (age >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);

console.log(`My value of expression is ${2+4+6}`);

// In Template literals we pass the expressions

const bill = 275;

const tip = bill <= 300 && bill >= 75 ? bill * 0.15 : bill * 0.20;

console.log(tip);

console.log(`The bill was ${bill} and the tip was ${tip} the total is ${bill + tip}`);

