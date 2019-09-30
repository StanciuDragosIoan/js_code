/*
    ### Inheritance in ES6
*/

class Person
{
    constructor(firstName, lastName)
    {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting()
    {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}

//customer inherits from Person
class Customer extends Person 
{
    constructor(firstName, lastName, phone, membership)
    {   
        //call parent class constructor
        super(firstName, lastName);
        this.phone = phone;
        this.membership = membership;
    }

    static getMembershipCost()
    {
        return 500;
    }
}

const John = new Customer('John', 'Doe', '555-555-5555', 'gold');
John.greeting()//can call Person methods from Customer
Customer.getMembershipCost(); //call static method

console.log(Customer.getMembershipCost());