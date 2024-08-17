// Truthy and Falsy 
// There are 5 Falsy values 0 , '' , undefined , null and NaN

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean({}));
console.log(NaN);

const money = 0;

// The things we pass in () js converts them into boolean
if(money){
    console.log("Don't spend at all");
}else{
    console.log("You should get a job");
}

// const height11;

// if(height11){
//     console.log('Yay! height is defined!');
// }else{
//     console.log('Please define height');
// }

age = 18;
if(age === 18){
    console.log("You just became adult");
}

// == performs type coersion but === gives true only if the type is same

// const favourite = prompt("Enter your favourite number");
let favourite = 23;
console.log(favourite);


if(favourite === 23){
    console.log('Cool 23 is an amazing number');
}else if(favourite === 7){
    console.log('7 is also a cool number');
}else{
    console.log('Number is not 23 or 7');
}

if(favourite !== 23){
    console.log('Why not 23?');
}
