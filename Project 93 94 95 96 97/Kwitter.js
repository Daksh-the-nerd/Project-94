
function addUser()
{
    var names = document.getElementById("user1name").value
    localStorage.setItem("Username",names);
    var namelength = names.length;


    if(namelength == 0)
    {
        document.getElementById("login_button").style.display = "none";
    }
    else if(namelength >0)
    {
        var button = '<button id="login_button" onclick="addData()">Login</button>';
        document.getElementById("seconddiv3").innerHTML = button;
    }

    
}

function addData()
{
    var names = document.getElementById("user1name").value
    localStorage.setItem("Username",names);
    window.location = "Kwitter_room.html"
}
    
    var name_of_user = localStorage.getItem("Username")

function home()
{
    window.location = "index.html"
} 

function myFunction()
{
    document.getElementById("welcome").innerHTML="Welcome to Kwitter " + name_of_user + "."
}

