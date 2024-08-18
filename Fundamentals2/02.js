// Introduction to Objects
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']]

    calcAge = function(){
        this.age = 2037 - this.age;
        return 
    }

    const jonas = {
        firstName: 'Jonas',
        lastName: 'Schmedtmann',
        age: 2037 - 1991,
        job: 'teacher',
        friends: ['Michael', 'Peter', 'Steven']
      }


      console.log(jonas.lastName);
      console.log(jonas["lastName"]);

     const namekey = 'Name';

     console.log(jonas['first' + namekey]);
     console.log(jonas['last' + namekey] );

     // When we need to do some computations use bracket notation otherwise use dot notation

    //  const interestedIn = prompt('What do you want to know about Jonas ? choose firstName , lastName , age , job');

    //  console.log(jonas[interestedIn]);


     jonas.location = 'Pune';
     jonas['twitter'] = '@jonassmidtmann';

     console.log(jonas);

     console.log(`${jonas.firstName} has ${jonas.friends.length} and out of them ${jonas.friends[0]} is the best friend`);