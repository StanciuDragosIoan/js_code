//function declarations
function greet(firstName = 'John', lastName = 'Doe')
{   
    // if(firstName === "undefined"){
    //     firstName = "John";
    // }

    // if(lastName === "undefined"){
    //     lastName = "Doe";
    // }
    //console.log('Hello');
    return 'Hello ' + firstName + ' ' + lastName;
}

//console.log(greet('Steve', 'Smith'));




//function expression (assigning a function to a variable)
const square = function(x = 3){
    return x * x;
};

//console.log(square(8));


//IIFEE (Immediately Invokable Function Expression)
(function(){
    console.log('IIFEE ran...');
})();