document.getElementById("button1").addEventListener("click", getText);
document.getElementById("button2").addEventListener("click", getJson);
document.getElementById("button3").addEventListener("click", getApiData);

function getText()
{
    fetch('test.txt')
    .then( res => res.text())
    .then( data =>
    {
        //console.log(data);
        document.querySelector("#output").innerHTML = data;
    })
    .catch(
        error => console.log(error)
    );
}


//get local JSON data
function getJson()
{
    fetch('posts.json')
    .then(res => res.json())
    .then(data =>
    {
        //console.log(data);
        let output = "";
        data.forEach(function(item)
        {
            output += 
            `
                <li>${item.title} </br> ${item.body}</li>
            `;
        });
        document.getElementById("output").innerHTML = output;
    })
    .catch(error => console.log(error));
}


//get API data
function getApiData()
{
    fetch('https://api.github.com/users')
    .then(res => res.json())
    .then( data =>
    {
        //console.log(data);
        let output = "";
        data.forEach(function(user)
        {
            output += 
            `
                <li>${user.login}</li>
            `;
        });
        document.getElementById("output").innerHTML = output;
    })
    .catch(error => console.log(error));
}