const http = new EasyHTTP();

//get users (asynchronous)
//http.get("https://jsonplaceholder.typicode.com/users");


//get users (asynchronous with promises)
// http.get("https://jsonplaceholder.typicode.com/users")
// .then(data => console.log(data))
// .catch(err=> console.log(err));



//post a new user

const data = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'jdoe@gmail.com'
}

//make POST Request
// http.post("https://jsonplaceholder.typicode.com/users", data)
// .then(data => console.log(data))
// .catch(err=> console.log(err));




//make PUT request
// http.put("https://jsonplaceholder.typicode.com/users/2", data)
// .then(data => console.log(data))
// .catch(err=> console.log(err));



//make DELETE request
http.delete("https://jsonplaceholder.typicode.com/users/2")
.then(data => console.log(data))
.catch(err=> console.log(err));

