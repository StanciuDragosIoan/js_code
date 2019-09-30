/*
    singleton pattern allows us to build a module (IFFEE) that returns a single instance
    of an object

    repeated calls to the constructor will return the same instance 
*/

const singleton = (function()
{
    let instance;

    function createInstance()
    {
        const object = new Object({name: 'Brad'});
        return object;
    }

    return{
        getInstance: function(){
            if(!instance){
                //if no instance -> create one
                instance = createInstance()
            }
            //else return the already existant instance
            return instance;
        }
    }
})();

const instanceA = singleton.getInstance();
const instanceB = singleton.getInstance();
//console.log(instanceA);

console.log(instanceA === instanceB); //logs true so we can only have a single instance