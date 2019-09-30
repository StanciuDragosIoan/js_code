/*
    iterators are like advanced loops that can be paused

    generators are like functions that can be paused and can return multiple values
*/

function nameIterator(names)
{
    let nextIndex = 0;


    return {
        next: function()
        {
            return nextIndex < names.length ?
            { value: names[nextIndex++], done: false} :
            {done: true}
        }
     }
}

/*
    the iterator function sets a nextIndex var initially at 0;
    it returns an object which contains a function next();
        the function next returns either a value of the iterated through array (the 
        next index of it incremented by 1 each time) or, if the nextIndex reaches the 
        iterated through array length, the next() function returns an object with done; 
*/

/*

//create an array of names 
const namesArray = [
    'Jack',
    'Jill',
    'John'
];

//initialize iterator and pass in the names array
const names =  nameIterator(namesArray);

console.log(names.next().value);
console.log(names.next().value);
console.log(names.next());
console.log(names.next());

*/



/*
    Generators are functions that can return multiple values (yield values)

    generator function is marked by *
*/

/*

function* sayNames()
{
    yield 'Jack';
    yield 'Jill';
    yield 'John';

}

const name = sayNames();

console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);

*/


/*

function* createIds()
{
    let index = 0;

    while(true)
    {
        yield index++;
    }
}

const gen = createIds();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

*/

const dragons = [
    'cool dragon',
    'angry dragon',
    'nasty dragon'
];

//the iterator allowing for..of loop to iterate over arrays/objects
const iterator = dragons[Symbol.iterator];
 
//for ... of loop (iterate over dragons)
for (const dragon of dragons)
{
    dragon
}

//iterate over each character of the first dragon in the array
for (const char of dragons[0])
{
    char
}

/*
    the for of loop does not 'know' how to iterate over the array, but it can iterate thanks
    to an interator provided by the array (an object returned by the array which tells other
    objects how to iterate the array)

    the for of loop calls the next() method of the iterator for the array so that's how
    it iterats through the values

    an iterator can iterate over everything 
*/

