/*
    in JS I can have multiple scopes ( global scope, function scope, block scope, etc..)

    the inner scope (so scope 2 for scope 1 or scope 3 for 2 and 1) can read from the 'parent'
    scope so for instance when makeAnotherId() is called, it will look inside its function
    body for the someId, if it won't find it, it will look in the parent scope 
    (makeSomeRandomId) and if it doesn't find it there, it looks in the global scope 
*/


  

//SCOPES

/* 

//scope 1
const someId = 2;
function makeSomeRandomId()
{
    //scope 2
   // console.log(someId);

    function makeAnotherId()
    {   
        //scope 3
        console.log(someId);
    }

    makeAnotherId();
}
 

makeSomeRandomId();

*/


//CLOSURES

function makeId(id)
{
    const theId = `id_${id}`;
    // return theId;
    return function(name)
    {
       return `${theId}_${name.toUpperCase()}`
    }
}

const newId = makeId('1234gdfh');
console.log(newId('left door'));
console.log(newId('right door'));
console.log(newId('windscreen'));

const anotherId = makeId('sa34365');
console.log(anotherId('left door'));
console.log(anotherId('right door'));
console.log(anotherId('windscreen'));

/*
    a closure is a function that returns a function 

    note how we log newId as a function call() that's because makeId() itself returns a 
    function, a function which we can call each time we log newId()  

    this is a closure - the returned function creates a 'closure' and that's Y we can
    call it multiple times, each time accessing the outer scope of it with different
    params ( in this case the 'name' param and the 'outer scope' refers to the id var)
*/