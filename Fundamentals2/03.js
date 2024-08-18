// Object Function

const profile = {
    firstname : 'Jonas',
     lastName : 'Shmidtmann',
     age : 23,
     birthyear : 2002 ,
     calcAge : function(birthyear) {
        return 2037 - birthyear;
     }
}


calcAge = function(birthyear) {
   return 2037 - birthyear;
}

console.log(profile.calcAge(1991));
console.log(profile['calcAge'](1991));

