/*
    Higher Order Functions --> FILTER()

    Functional programming allows a better re-use of code, writing code faster, better, with
    less bugs

    in JavaScript (and other functional programming languages) functions are values
        see below
*/

//regular function
function triple(x)
{
    return x * 3;
}

//anonymous function assigned to a variable
var triple = function(x){
    return x * 3;
}

//the variable can be passed around
var waffle = triple;

waffle(30); //returns 90;

/*
    In functional programming functions are values (so they can be assigned to variables or 
    passed into other functions as arguments) -> the functions that take other functions in 
    as arguments are called Higher Order Functions

    Higher Order Functions are good because of 'composition' (the fact that we can take 1 
    function and put it into another function means that we can 'compose' more complex
    functions from simple ones -->which is easier to maintain)
*/

//e.g. filter()  

/*
    filter takes in a function as argument and it iterates over every item of an array and
    tests it with the function. The callback function will return true or false. If the item 
    'passes' the test implemented in the callback (so if the callback function returns true)
    the element is added to the newly created 'filtered' array)
*/

var animals = [
    { name: 'Fluffykins', species: 'rabbit'},
    { name: 'Caro', species: 'dog'},
    { name: 'Hamilton', species: 'dog'},
    { name: 'Harold', species: 'fish'},
    { name: 'Ursula', species: 'cat'},
    { name: 'Jimmy', species: 'fish'},
];

//filter the dogs with a for loop:
/*
var dogs = [];
for(var i =0; i < animals.length; i++){
    if(animals[i].species === "dog"){
        dogs.push(animals[i]);
    }
}
*/

//filter the dogs with filter()
var dogs = animals.filter(function(animal){
    return animal.species === 'dog';
});

/*
    filter accepts a callback function as an argument (it's called 'callback' because the
    'host' function will 'call back' to them)

    filter loops through each item in the array and for each item it will pass it into the
    callback function (it will expect the callback function to return true or false) to 
    tell the filter function whether or not the item should be added to the resulting array

    when it's done iterating over every item of the array, it will return the 'filtered' array


    # Note that the filter exemple above is shorter than the for loop one
        it is shorter because with the filter function we are writing less logic (we are writing)
        only 1 line of code which determines whether or not an animal is a dog

        the rest of the logic (creating the dogs array and pushing the animals that are a dog)
        onto it, is handled by the filter function itself (while in the for loop, it's handled
        in the foor loop itself). This is composition (the callback function deals with 
        deciding whether or not an animal is a dog, while the filter function does the dogs 
        array creation and pushes the 'dogs' onto it;

    The callback function and the filter function are 'composable' they can be used together
*/

//break out the callback into a separate variable

var isDog = function(animal){
    return animal.species === 'dog';
};

var dogs2 = animals.filter(isDog);


/*
    isDog() is only deciding whether an animal is a dog (it has nothing to do with filtering)
        if we want to use it for instance to get the animals that are not a dog, we can pass
        it as an argument to other functions than filter()
*/

 



