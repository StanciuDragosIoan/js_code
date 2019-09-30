/*
    AJAX and the XML Http request object are older technologies but very reliable

    Fetch is a newer standard
*/

//synchronous code
posts = loadPostsSynchronously(); 

//...fetches posts, next function has to wait till loadPostsSynchronously finishes
// this blocks the thread of execution (JS is single threaded so that stops everything) 

doTheNextThing(); //only after loadpostsSynchronously finished;

//asynchronous code
posts = loadPostsAsynchronously(function(){
    //..wait till posts are fecthed;
    //..do something with posts;
});

doTheNextThing(); //does not have to wait for loadPostsAsynchronously