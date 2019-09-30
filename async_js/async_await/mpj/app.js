
//fetch the avatarUrl of a single cat

/*
async function fetchAvatarUrl(userId)
{   
    const response = await fetch(`https://catappapi.herokuapp.com/users/${userId}`);

    const data = await response.json()
    return data.imageUrl
    
  
  
        // return fetch(`https://catappapi.herokuapp.com/users/${userId}`)
        //     .then(response => response.json())
        //     .then(data => console.log(data.imageUrl))
    
}
*/

// fetchAvatarUrl(123);
//console.log(fetchAvatarUrl(123));

/*
    inside a function marked as 'async' we can place the 'await' keyword in front of an 
    expression that returns a promise. When we do so, the execution of the async function 
    is paused until the promise is resolved

*/

//fetch all the avatars of all the cats of a user
function fetchCatAvatars(userId)
{
    return fetch(`https://catappapi.herokuapp.com/users/${userId}`)
        .then(response => response.json())
        .then(user => {
            const promises = user.cats.map(catId =>
                 fetch(`https://catappapi.herokuapp.com/cats/${catId}`)
                    .then(response => response.json()) 
                    .then(catData => catData.imageUrl)
            )
            return Promise.all(promises);
        })
}
fetchCatAvatars(123);
console.log(fetchCatAvatars(123));
 