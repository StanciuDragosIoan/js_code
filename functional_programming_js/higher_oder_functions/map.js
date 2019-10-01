/*
    Map

    Map takes in a callback function that iterates over every item of an array (every item of
    the array is passed into the callback function and modified by it) and it modifies
    it (it doesn't remove any of them but it modifies them all)

    unlinke filter (which returned a true or false value according to which the item was
    included in the new array or not), map will include all items in the array but it will
    expect the callback function to returned a transformed object (item of the array)
*/

var animals = [
    { name: 'Fluffykins', species: 'rabbit'},
    { name: 'Caro', species: 'dog'},
    { name: 'Hamilton', species: 'dog'},
    { name: 'Harold', species: 'fish'},
    { name: 'Ursula', species: 'cat'},
    { name: 'Jimmy', species: 'fish'},
];

//say we want to get an array with all the names of anymals

//solution 1 (for loop)
var names = [];
for(var i = 0; i<animals.length; i++){
    names.push(animals[i].name);    
}
 


//sollution 2 (map)
var names2 = animals.map(function(animal){
    return animal.name;
});

//sollution 2 (but modify the returned object even further)
var names3 = animals.map(function(animal){
    return animal.name + 'is a ' + animal.species;
});




//sollution 3 (map with arrow function callback)
var names3 = animals.map((animal)=>{return animal.name});

//sollution 3 (shortest)
var names4 = animals.map(animal => animal.name);

/*
    in functional programming it's common to shorten the names of variables
*/

var names5 = animals.map(x => x.name);


