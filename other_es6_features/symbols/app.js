/*
    Symbols are unique

    They are a primitive data type 


*/

const sym1 = Symbol();
const sym2 = Symbol('sym2');

console.log(Symbol('123') === Symbol('123'))// logs false

