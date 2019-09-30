const posts = [
    {title: "Post One", body: "This is Post One"},
    {title: "Post Two", body: "This is Post Two"}
];

//with callbacks
/*
function createPost(post, callback)
{
    setTimeout(function()
    {
        posts.push(post);
        callback();
    }, 2000);
}

function getPosts()
{
    setTimeout(function()
    {
        let output = '';
        posts.forEach(function(post)
        {
            output+= 
            `
                <li>${post.title}</li>
            `;
            document.body.innerHTML = output;
        }, 1000);
    })
}

createPost({title: "Post Three", body: "This is Post Three"}, getPosts);

*/

//with promises 
function createPost(post)
{   
    return new Promise(function(resolve, reject)
    {
        setTimeout(function()
        {
            posts.push(post);
            //mimmick error (set to true to test)
            const error = false;

            if(!error){
                resolve();
            } else {
                reject('Eror: Something went wrong...');
            }
        

        }, 2000);
    });

}

function getPosts()
{
    setTimeout(function()
    {
        let output = '';
        posts.forEach(function(post)
        {
            output+= 
            `
                <li>${post.title}</li>
            `;
            document.body.innerHTML = output;
        }, 1000);
    })
}

createPost({title: "Post Three", body: "This is Post Three"})
.then(getPosts)
.catch(function(err)
{
    console.log(err);
});

/*
    note how above we removed the callback function and returned a promise instead
        when calling createPost() we removed  the getPosts call from the createPost() 
        and instead called it in .then(); //that's how promises handle responses

        for error handling we can reject() the promise and handle the error in .catch()
            it still throws an error if we don't catch;
*/