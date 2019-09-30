/*
    Module and revealing module pattern

    It allows us to break our project into modules with private properties and methods

    *putting things in () makes them an expression
*/


//basic structure

/*

(function(){
    //declare private properties and methods



    //declare public properties and methods
    return
    {

    }

})();
*/



//STANDARD MODULE PATTERN

/*
const UIController = (function()
{
    const text = 'Hello World!';

    const changeText = function()
    {
        const element = document.querySelector('h1');
        element.textContent = text;
    }

    return{
        callChangeText: function(){
            changeText();
            console.log(text); //access private property here
        }
    }
})();

*/
 

// UIController.callChangeText();

//console.log(UIController.changeText); //throws error as changeText is private variable to the UIController

 

//REVEALING MODULE PATTERN
const ItemCtrl = (function(){
    //private property
    let data = [];

    //private methods
    function add(item)
    {
        data.push(item);
        console.log('item added');
    }

    function get(id)
    {
        return data.find(item => {
            //return item.id if it's equal to id passed in
            return item.id === id;
        })
    }

    //reveal methods
    return{
        add: add,
        get: get
    }
})();

ItemCtrl.add({ id:1, name: "John"});
ItemCtrl.add({ id:2, name: "Mark"});

console.log(ItemCtrl.get(2));

/*
    revealing module pattern returns an object literal that maps private properties and 
    methods of the module directly

    module pattern returned a different method that returned the ones in the module
*/