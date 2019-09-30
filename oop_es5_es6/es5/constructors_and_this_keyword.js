//object literal
// const brad = {
//     name: "Brad",
//     age: 30
// }

// console.log(brad);

// Person constructor
function Person(name, dob)
{
    this.name = name;
    this.birthday = new Date(dob);
    this.calculateAge = function()
    {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
 
}

/*
    the this keyword reffers to the current instance of an object;
*/

//const brad = new Person("Brad", 30);
//const john = new Person("John", 30);

//console.log(this); //logs window
//console.log(john);

const brad = new Person('Brad', '9-10-1981');
console.log(brad.calculateAge());