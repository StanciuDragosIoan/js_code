/*
    The find() method returns the value of the first element in the provided array that 
    satisfies the provided testing function (the callback function).
*/

var array1 = [5, 12, 8, 130, 44];

var found = array1.find(function(element) {
  return element > 10;
});

