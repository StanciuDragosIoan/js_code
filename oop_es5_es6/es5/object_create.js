const personPrototypes = {
    greeting: function()
    {
        return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function(newLastName)
    {
        this.lastName = newLastName;
    }
}

const mary = Object.create(personPrototypes);
mary.firstName = "Mary";
mary.lastName = "Williams";
mary.age = 30;
mary.getsMarried('Thompson');


//alternate syntax (won't work in node - must run in browser)
const brad = Object.create(personPrototypes, {
    firstName: {value: 'Brad'},
    lastName: {value: 'Traversy'},
    age: {value: 36}
});

console.log(brad.greeting());