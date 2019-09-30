const posts = [
    {
        title: 'Post One',
        body: 'This is Post One'
    },

    {
        title: 'Post Two',
        body: 'This is Post Two'
    }
];

//synchronous way
/*
function createPost(post)
{
    setTimeout(function(){
        posts.push(post);
    }, 2000);
}

function getPosts()
{
    setTimeout(function(){
       let output = '';

       posts.forEach(function(post){
            output += 
            `
                <li>${post.title}</li>
            `;
            document.body.innerHTML = output;
       });

    }, 1000);
}


createPost({
    title: 'Post Three',
    body: 'This is post Three'
});

getPosts();
*/
/*
    Creating the new post takes 2 sec
    Fetching all posts and displaying them in browser takes 1 sec
        The new post does not get created before all the posts are fetched so only post 1
        and 2 are displayed
*/



//asynchronous way
function createPost(post, callback)
{
    setTimeout(function(){
        posts.push(post);
        callback();
    }, 2000);
}

function getPosts()
{
    setTimeout(function(){
       let output = '';

       posts.forEach(function(post){
            output += 
            `
                <li>${post.title}</li>
            `;
            document.body.innerHTML = output;
       });

    }, 1000);
}


createPost({
    title: 'Post Three',
    body: 'This is post Three'
}, getPosts);

/*
    We passed a callback function to createPost() so when the post is created it calls it
    we called getPosts as the callback function within createPost

        Now it does not matter anymore if there is a time delay between the 2 functions
*/

 