function easyHTTP()
{
    this.http = new XMLHttpRequest();
}

// GET request
easyHTTP.prototype.get = function(url, callback)
{
    this.http.open('GET', url, true);

    //self captures this for the inner scope in the function underneath
    let self = this;

    this.http.onload = function()
    {
        if(self.http.status === 200)
        {   
            //callback() is used to get the response asynchronously
            callback(null, self.http.responseText); //null is pased as default for the error
        } else {
            callback('Error: ' + self.http.status); //error logged if status is not 200
        }
    }

    this.http.send();
}

/*
    note if we leave the function in onload as is:

     this.http.onload = function()
    {
        if(this.http.status === 200)
        {
            console.log(this.http.responseText);
        }
    }

    this keyword pertains to the function here so this.http is undefined because the 
    function does not have a this.http property

    if we convert it to an arrow function it will work:

      this.http.onload = () =>
    {
        if(this.http.status === 200)
        {
            console.log(this.http.responseText);
        }
    }

    an arrow function could solve this because an arrow function has a 'lexical' this
    which means it can read outside of its scope (usually this pertains to the scope in
    which it was defined, in this case the function scope);

    see above an ES5 'fix' for the issue with 'self';
*/

 

// POST request
easyHTTP.prototype.post = function(url, data, callback)
{
    this.http.open('POST', url, true);

    this.http.setRequestHeader('Content-type', 'application/json'); 

    let self = this;

    this.http.onload = function()
    {
        callback(null, self.http.responseText); 
    }

    this.http.send(JSON.stringify(data));
}

// PUT request
easyHTTP.prototype.put = function(url, data, callback)
{
    this.http.open('PUT', url, true);

    this.http.setRequestHeader('Content-type', 'application/json'); 

    let self = this;

    this.http.onload = function()
    {
        callback(null, self.http.responseText); 
    }

    this.http.send(JSON.stringify(data));
}

// DELETE request
easyHTTP.prototype.delete = function(url, callback)
{
    this.http.open('DELETE', url, true);

    //self captures this for the inner scope in the function underneath
    let self = this;

    this.http.onload = function()
    {
        if(self.http.status === 200)
        {   
            callback(null, 'Post Deleted'); 
        } else {
            callback('Error: ' + self.http.status);
        }
    }

    this.http.send();
}