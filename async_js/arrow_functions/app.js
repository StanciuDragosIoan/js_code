// const sayHello = function()
// {
//     console.log('Hello');
// }

// const sayHello = () =>
// {
//     console.log('Hello');
// }

//one line function does not need braces
//const sayHello = () => console.log('Hello');


//one line return
// const sayHello = () => 'Hello';


/*
    if we return an object literal, we need to wrap it in parentheses or it 
    will be perceived as function body
*/
// const sayHello = () => ({ msg : "Hello"});



//single param does not need parentheses
// const sayHello = name => console.log(`Hello ${name}`);


//more than one param do need to be wrappd in parentheses
//const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

// sayHello('Brad', 'Traversy');

const users = [
    'Nathan',
    'John',
    'William'
];



// const nameLengths = users.map(function(name){
//     return name.length;
// });

//shorter
// const nameLengths = users.map((name) => 
//     {
//         return name.length
//     });


//shortest
// const nameLengths = users.map(name => name.length);

// console.log(nameLengths);




/*check the fetch example cleaned up with arrow functions */