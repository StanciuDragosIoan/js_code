document.getElementById("button").addEventListener("click", getData);

function getData()
{   

    //create xhr object
    const xhr = new XMLHttpRequest();

    //open method (here we specify the type of request we want to make and the URL)
    xhr.open('GET', 'data.txt', true); //true as 3rd param  = request is async
   
   // console.log('READYSTATE', xhr.readyState); //state 1

   //optional -used for spinners/loaders
   xhr.onprogress = function()
   {
        console.log('READYSTATE', xhr.readyState);
   }

    xhr.onload = function()
    {   
       // console.log('READYSTATE', xhr.readyState); //state 4 already
        //check everything is ok
        if(this.status === 200){   
            //log the data
             //console.log(this.responseText);
             document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }


    xhr.onerror = function()
    {
        console.log('an error occurred...');
    }




        //older syntax with onreadystatechange 

        // xhr.onreadystatechange = function()
        // {   
        //     console.log('READYSTATE', xhr.readyState); 
        /*
            the log above shows the state as 1 through 4 (so we check below that we are at 4)
        */
        //     if(this.status === 200 && this.readyState === 4)
        //     {
        //         console.log(this.responseText);
        //     }
        // }
    
    //make the actual http request (asynchronously)
    xhr.send();



        
        //ready state values
            // 0: request not initialiez
            // 1: server connection establishes
            // 2: request received
            // 3: processing request
            // 4: request finished and response is ready

        //http statuses
            //200: ok
            //403: Forbidden
            //404: not found



 


}