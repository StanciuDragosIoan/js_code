//regular function
// function myFunc()
// {
//     return 'Hello';
// }




//ex 1

//async function (adding async makes the function return a promise)
// async function myFunc()
// {
//     const promise = new Promise((resolve, reject)=>{
//         setTimeout(()=> resolve('Hello'), 1000);
//     });

//     const error = false;

//     if(!error){
//         const res = await promise;//wait till promise is resolved (1 second)
//         return res;
//     } else {
//         await Promise.reject(new Error('Something went wrong...'));  
//     }

   
// }

/*
    if we do something asynchronous inside an async function we can wait until that 
    first promise is resolved

*/

// myFunc()
// .then(data=>console.log(data))
// .catch(err=>console.log(err));





//ex 2

async function getUsers()
{   
    //await the response of the fetch call
    const response = await fetch
    ('https://jsonplaceholder.typicode.com/users');


    //only proceed once the promise returned by fetch is resolved
    const data = await response.json();

    //only proceed once the 2nd promise is resolved
    return data;
}

getUsers().then((users)=>console.log(users));

