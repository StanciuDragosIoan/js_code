class EasyHTTP
{   
    //GET request asynchronously but no promise (only the 1 returned by fetch())
    // get(url)
    // {
    //     fetch(url)
    //     .then(res => res.json()) //res.json() itself returns a promise (so a 2nd .then())
    //     .then(data => console.log(data))
    //     .catch( err => console.log(err));
    // }


    //GET request synchronously (but we return a promise)
    get(url)
    {   
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(res => res.json()) //res.json() itself returns a promise (so a 2nd .then())
            .then(data => resolve(data))
            .catch( err => reject(err));
        }); 
    }



    //POST request
    post(url, data)
    {   
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST', 
                headers: { 'Content-type' : 'application/json'},
                body: JSON.stringify(data)
            })
            .then(res => res.json()) //res.json() itself returns a promise (so a 2nd .then())
            .then(data => resolve(data))
            .catch( err => reject(err));
        }); 
    }


      //PUT request
      put(url, data)
      {   
          return new Promise((resolve, reject) => {
              fetch(url, {
                  method: 'PUT', 
                  headers: { 'Content-type' : 'application/json'},
                  body: JSON.stringify(data)
              })
              .then(res => res.json()) //res.json() itself returns a promise (so a 2nd .then())
              .then(data => resolve(data))
              .catch( err => reject(err));
          }); 
      }



      //DELETE Request
      delete(url)
      {   
          return new Promise((resolve, reject) => {
              fetch(url, {
                  method: 'DELETE', 
                  headers: { 'Content-type' : 'application/json'}
              })
              .then(res => res.json()) //res.json() itself returns a promise (so a 2nd .then())
              .then( () => resolve('Resource deleted...'))
              .catch( err => reject(err));
          }); 
      }
}