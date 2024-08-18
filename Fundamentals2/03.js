// Object Function

const profile = {
    firstName : 'Jonas',
     lastName : 'Shmidtmann',
     age : 23,
     job : 'Teacher',
     birthyear : 2002 ,
     hasDriversLicence : true,

   //   calcAge : function() {
   //      return 2037 - birthyear;
   //   }


   //   calcAge : function() {
   //    console.log(this);
   //      return 2037 - this.birthyear;
   //   }


   calcAge : function() {
      console.log(this);
      this.age = 2037 - this.birthyear;
        return this.age;
     },

   getSummary : function(){
      return `${this.firstName} is a ${this.calcAge()} aged ${this.job}`;
   }
}


calcAge = function(birthyear) {
   return 2037 - birthyear;
}

console.log(profile.calcAge(1991));
console.log(profile['calcAge'](1991));

console.log(profile.age);
console.log(profile.getSummary());
// challenge


// console.log(`${profile.firstName} is a ${profile.age} aged ${profile.job} has ${hasDriversLicence ? 'a' : 'no'}`);


const mark = {
   fullName: 'Mark Miller',
   mass: 78,
   height: 1.69,
   calcBMI: function () {
     this.bmi = this.mass / this.height ** 2;
     return this.bmi;
   }
 };
 
 const john = {
   fullName: 'John Smith',
   mass: 92,
   height: 1.95,
   calcBMI: function () {
     this.bmi = this.mass / this.height ** 2;
     return this.bmi;
   }
 };
 
 mark.calcBMI();
 john.calcBMI();
 
 console.log(mark.bmi, john.bmi);

 if(mark.bmi > john.bmi){
   console.log(`${mark.firstName}'s BMI ${mark.calcBMI} is larger than ${john.firstName}'s ${john.calcBMI}`);
   }else{
   console.log(`${john.firstName}'s BMI ${john.calcBMI} is larger than ${mark.firstName}'s BMI ${mark.calcBMI}`);

   }



   const jonasArray = [
      'Jonas',
      'Schmedtmann',
      2037 - 1991,
      'teacher',
      ['Michael', 'Peter', 'Steven']];


      for(let i = 0 ; i < jonasArray.length ; i++){
         console.log(jonasArray[i] , typeof jonasArray[i]);
         // jonasArray.push(typeof jonasArray[i]);
      }

      const years = [1991,2003,2045,2034];
      const ans = [];
      
      console.log("Only numbers");
      for(let i = 0 ; i < years.length ; i++){
       ans.push(2037 - years[i]);
       if(typeof years[i] !== 'number') continue;
       console.log(ans[i] , typeof ans[i])
      }  
      



      for(let i = 0 ; i < years.length ; i++){
         ans.push(2037 - years[i]);
         if(typeof years[i] !== 'number') continue;
         console.log(ans[i] , typeof ans[i])
        }  
        
  
      for(let i = jonasArray.length - 1 ; i >= 0 ; i--){
         console.log(jonasArray[i]  , i);
      }  

      for(let exercise = 0 ; exercise < 4 ; exercise++){
         console.log(`--- Starting exercise ${exercise}`);
         for(let rep = 1; rep < 6 ; rep ++){
            console.log(`rep no. ${rep}`);
         }
      }
      
      let rep = 1;
      while(rep <= 10){
         console.log(`Lifting weight of rep no. ${rep}`);
         rep++;
      }

      let dice = Math.trunc(Math.random() * 6 + 1);

      while(dice != 6)
      {
       dice = Math.trunc(Math.random() * 6 + 1);
        console.log(dice);    
      }