/*
    observer pattern allows us to subscribe/unsubscribe from events/functionality
*/


function EventObserver()
{   
    //functions that are passed to the event observer 
    this.observers = [];
}

EventObserver.prototype = {
    subscribe: function(fn){
        this.observers.push(fn);
        console.log(`you are subscribed to  ${fn.name}`);
    },

    unsubscribe: function(fn){
        this.observers = this.observers.filter(function(item){
            //filters the function to unsubscribe from so it s removed from the observers []
            if(item !== fn){
                return item;
            }
        });
        console.log(`you are unsubscribed from  ${fn.name}`);
    },

    fire: function(){
        //call the observer method
        this.observers.forEach(function(item){
            item.call();
        });
    }

}

const click = new EventObserver();


 
//click handler (function we want to subscribe to/from)
const getCurMilliseconds = function(){
    console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
}

//event listeners
document.querySelector('.sub-ms').addEventListener('click', function(){
    click.subscribe(getCurMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function(){
    click.unsubscribe(getCurMilliseconds);
});




document.querySelector('.fire').addEventListener('click', function(){
    click.fire();
});


//click handler (function we want to subscribe to/from)
const getCurSeconds = function(){
    console.log(`Current Seconds: ${new Date().getSeconds()}`);
}

//event listeners
document.querySelector('.sub-s').addEventListener('click', function(){
    click.subscribe(getCurSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function(){
    click.unsubscribe(getCurSeconds);
});

