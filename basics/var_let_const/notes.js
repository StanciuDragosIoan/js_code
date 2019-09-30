/*
    var is 'global scoped' so it reaches into the global scope

    let & const are block lvl scope or function scope (so they don't reach into global scope)

*/

var a = 2;
let b = 3;
const c = 4;

function test(){
    var a = 5;
}

//test();

//console.log('Global scope ', a); // no overwrite (same as for let & const)


/*
    in a loop or an if statement, var can behave badly
*/

// if(true){
//     var a = 5;
//     let b = 6;
//     const c = 7;
// }
// console.log('Global Scope ', a, b, c); // a in the global scope (2) was over-writeen by var 

/*
    note that only the var in the if block over-wrote the one in the global scope (let & const)
    did not
*/


for(var a = 0; a < 10; a++){
    console.log(`${a} in loop`);
}

console.log('Global Scope ', a, b, c); 

/*
    in the example above, note that only var overwrites the global scope, let & const don't

    replace var with let or const and check
*/