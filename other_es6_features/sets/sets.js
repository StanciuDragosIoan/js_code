/*
    a list of unique values (primitives or reference types)
*/

const set1 = new Set();

//add values to set
set1.add(100);
set1.add('a string');
set1.add({name: 'John'});
set1.add(true);
set1.add(100); //won't add an element a 2nd time


//pass values to construtor
const set2 = new Set([1, true, 'string']);





