var email="brendaneich@gmail.com"
var password="123"

var form=document.forms

function loginPage()
{
    var userdefEmail=document.getElementById("email").value
    var userDefPassword=document.getElementById("password").value

    var divBor=document.getElementsByClassName("borderDiv")

    if(email!=userdefEmail && password!=userDefPassword)
    {
        document.body.style.backgroundImage="linear-gradient(75deg,red,red)"
        divBor[0].style.borderColor="red"
        divBor[1].style.borderColor="red"
        document.getElementById("result").innerHTML="User name and Password is wrong"
    }
    else if(email==userdefEmail && password!=userDefPassword)
    {
        document.body.style.backgroundImage="linear-gradient(75deg,rgb(240, 16, 195),red)"
        divBor[0].style.borderColor="royalblue"
        divBor[1].style.borderColor="red"
        document.getElementById("result").innerHTML="Password is wrong"
    }
    else if(email!=userdefEmail && password==userDefPassword)
    {
        document.body.style.backgroundImage="linear-gradient(75deg,red,rgb(240, 16, 195))"
        divBor[0].style.borderColor="red"
        divBor[1].style.borderColor="royalblue"
        document.getElementById("result").innerHTML="Email is wrong"
    }
    else
    {
        form[0].action="./HTML/index.html"
        form[0].elements[2].type="submit"
    }
}

function visible()
{
    form[0].elements[1].type="text"
    document.getElementById("passVisible").src="./eyesopen.jpeg"
    document.getElementById("passVisible").style.transform="rotateY(360deg)"
    document.getElementById("passVisible").style.transition="transform 0.5s"
}
function invisible()
{
    form[0].elements[1].type="password"
    document.getElementById("passVisible").src="./eyesclose.jpeg"
    document.getElementById("passVisible").style.transform="rotateY(0deg)"
    document.getElementById("passVisible").style.transition="transform 0.5s"
}