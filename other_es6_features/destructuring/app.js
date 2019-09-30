//destructuring assignment

let a, b;

//rest pattern
[a, b, ...rest] = [100, 200, 300, 400, 500]; //rest = [300,400,500]

//destructuring assignment on object using the rest pattern
({a, b} = {a: 100, b:200, c:300, d:400, e:500 });
({a, b, ... rest} = {a: 100, b:200, c:300, d:400, e:500 });




//array destructuring
const people = ['John', 'Beth', 'Mike'];

const[person1, person2, person3] = people;

//object destructuring
const person = {
    name: "John",
    age: 36,
    city: 'Miami',
    gender: 'male'
}

//old ES5 way

//const name = person.name;

//es6 way

const { name } = person;


