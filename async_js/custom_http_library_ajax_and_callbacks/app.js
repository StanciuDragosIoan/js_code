const http = new easyHTTP();
// //get posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(error, response)
// {
//     if(error){
//         console.log(error);
//     } else {
//         console.log(response);
//     }
// });

//get single post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(error, response)
// {
//     if(error){
//         console.log(error);
//     } else {
//         console.log(response);
//     }
// });


//POST a new post

//create data
const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
};

//create post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(error, post){
//     if(error){
//                 console.log(error);
//             } else {
//                 console.log(post);
//             }
// });


//update post
// http.put('https://jsonplaceholder.typicode.com/posts/5', data, function(error, post)
// {
//     if(error){
//         console.log(error);
//     } else {
//         console.log(post);
//     }
// });



//delete post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(error, response)
{
    if(error){
        console.log(error);
    } else {
        console.log(response);
    }
});

 
 