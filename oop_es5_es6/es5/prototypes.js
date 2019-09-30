/*
    ### PROTOTYPES
*/

/*
    in JS all objects inherit their methods and properties from a prototype

    Object literals inherit from Object.prototype

    An object built through a constructor (e.g an instance of the Person() 
    constructor function) inherits from Person.prototype (but under the hood it still 
    inherits) from Object.prototype
*/

//e.g

function Person(firstName, lastName, dob)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    // this.calculateAge = function()
    // {
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
}


//moving calculateAge in the prototype

Person.prototype.calculateAge = function()
{
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

//get full name
Person.prototype.getFullName = function()
{
    return `${this.firstName} ${this.lastName}`;
}


//gets married (unlike the methods above that fetch data, this one manipulates data)
Person.prototype.getsMarried = function(newLastName)
{
    this.lastName = newLastName;
}

const john = new Person('John', 'Doe', '8-12-90');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');

mary.getsMarried('Smith');
console.log(mary.getFullName());
/*
    Note that if we console.log an object in the browser, we get to see __proto__ 
    pseudo-property (that is Person.prototype) and underneath it another __proto__
    pseudo-property (that is Object.prototype)
*/


/*
    Note that the calculateAge method should be put in the prototype of the objects 
    not in the constructor function itself (see that now the Person.prototype has the
    method inside of it)

    Note that if we comment out the calculate age and we add it in the Person.prototype,
    we can still use it just as if it were part of the constructor Object itself;
*/



//using the Object.prototype method  hasOwnProperty
console.log(mary.hasOwnProperty('calculateAge')); 

/*
    note it logs false as calculateAge is not part of the constructor but it is
    accessible through the prototype    
*/
