/*
    ### PROTOTYPAL INHERITANCE (how to have a constructor inherit from another one's
    prototype)
*/



//Person constructor
function Person(firstName, lastName)
{
    this.firstName = firstName;
    this.lastName = lastName;
}


//Greeting
Person.prototype.greeting = function()
{
    return `Hello there ${this.firstName} ${this.lastName}`;
}

person1 = new Person('John', 'Doe');

//console.log(person1.greeting());


//Customer Constructor
function Customer(firstName, lastName, phone, membership)
{   
    //call the properties from Person constructor
    Person.call(this, firstName, lastName);
    //assign the new properties normally
    this.phone = phone;
    this.membership = membership;
}

//inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

//make customer.prototype return Customer
Customer.prototype.constructor = Customer;

/*
    Object.create() copies the prototype of Person into the prototype of Customer
*/

//Customer greeting (overwrite the method inherited through the prototype)
Customer.prototype.greeting = function()
{
    return `Hello there ${this.firstName} ${this.lastName} welcome to our
    company!`;
}

 

const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'standard');
console.log(customer1.greeting());
