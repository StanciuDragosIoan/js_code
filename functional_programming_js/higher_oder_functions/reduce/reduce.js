/*
    reduce

    map, filter, find, etc.. are all 'list transformations' (they are specific)

    reduce is not that specific (it can be used to express any list transformation)

    reduce can be used with any other list transformation like map, filter, find, etc...
*/

var orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
];

//get the total of all the amounts


//sollution 1 (for loop)
var totalAmount = 0;
for(var i = 0; i < orders.length; i++){
    totalAmount += orders[i].amount;
}

//sollution 2 (reduce)
var totalAmount2 = orders.reduce(function(sum, order){
   // console.log('Hello', sum, order);
    return sum + order.amount;
}, 0);

//sollution 2 (reduce with arrow function)
var totalAmount3 = orders.reduce((sum, order) => sum + order.amount, 0);

totalAmount3

/*
    reduce takes in a callback function and a 2nd argument (an object which is a starting point 
    for our sum in this case)

    the callback function takes in the sum as a first argument and the iterated item as a 2nd
    argument

    the sollution 2 iterations do the following:
        iteration 1 (takes 0 - starting sum, adds the first order amount to it and returns it)
        the new amount is taken by iteration 2 (which ads the amount for oder 2 to it and 
        returns it), etc...

    iteration 1: 0 { amount: 250 }
    iteration 2: 250 { amount: 400 }
    iteration 3: 650 { amount: 100 }
    iteration 4: 750 { amount: 325 }
*/