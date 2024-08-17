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
    console.log("Don't spend at all")
}
