//var, let, const

// var name = 'John Doe';
// name = 'Steve Smith';


// //init a variable
// var greeting;
// greeting = 'Hello';

// //var name can include: letters, numbers, _, $ (cannot start with number);

// console.log(greeting);





//LET
// let name = 'John Doe';
// console.log(name);

//CONST cannot be re assigned and cannot be uninitialized
//const name;   //throws error



/*
   block lvl SCOPE with let and const
*/

//global scope
var a = 1;
let b = 2;
const c = 3;


// console.log('Global Scope ', a, b, c);



//function scope
function test(){
    var a = 4; //note the var (as it is global scope) overwrites the var a in global scope;
    let b = 5; //function lvl scope so no overwrite
    let c = 6; //function lvl scope so no overwrite

  //  console.log('Function Scope ', a, b, c);
}

test();


//block lvl scope
if(true){
//     var a = 4; //note the var (as it is global scope) overwrites the var a in global scope;
//     let b = 5; //block lvl scope so no overwrite
//     let c = 6; //block lvl scope so no overwrite
//    // console.log('Block Scope ', a, b, c);
}

//'loop' scope (let and const will not overwrite the global scope, but var will)
//try replacing let with var
// for(let a = 0; a < 10; a ++){
//     console.log(`loop: ${a}`);
// }

console.log('Global Scope ', a, b, c);