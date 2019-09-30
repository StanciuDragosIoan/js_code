/*
    a map is a set of key/value pairs

    any value (object ref type or primitive type) can be used as a key or a value

    *we can use an object as a key for instance
*/

const map1 = new Map();

//set keys
const key1 = 'Some String',
      key2 = {},
      key3 = function(){};


//Set map values by key
map1.set(key1, 'Value of key one');
map1.set(key2, 'Value of key two');
map1.set(key3, 'Value of key three');

console.log(map1.get(key1), map1.get(key2), map1.get(key3));// get keys

console.log(map1.size); //log size of map
