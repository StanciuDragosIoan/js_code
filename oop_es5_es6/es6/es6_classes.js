class Person 
{
    constructor(firstName, lastName, dob)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    greeting()
    {
        return `Hello, there ${this.firstName} ${this.lastName}`
    }

    calculateAge()
    {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getsMarried(newLastName)
    {
        this.lastName  = newLastName;
    }

    //add static method
    static addNumbers = function(x, y)
    {
        return x + y;
    }
}


//call static method
Person.addNumbers(1,2);

const mary = new Person('Mary', 'Smith', '11-13-1980');
console.log(mary.calculateAge());
mary.getsMarried('Williams');
 