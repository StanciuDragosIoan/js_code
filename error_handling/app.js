
/*
    a try catch block allows us to test code for errors without interrupting the execution
    of our program, note that if we do:

    myFunction();
    console.log('Program continues...');

    The program will stop at myFunction() which is not defined

    With the try-catch block, we can continue the execution and handle the error 
*/
try {
    //produce a reference error (undefined function)
    myFunction();
}catch(e)
{   
    // console.log(e);
    console.log(e.message); //logs message
    console.log(e.name); //logs type of error
    console.log(e instanceof ReferenceError); //tests for the type of error
} finally {
    //this blocks runs no matter what
    console.log('Finally runs no matter what happens in the blocks above');
}

console.log('Program continues...');