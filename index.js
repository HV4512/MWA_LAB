function validateform()
{
    var username = document.myform.username.value;
    var password = document.myform.password.value;
    

    if(username.length <=5)
    {
        alert("Username must be 5 to 10 characters long");
        return false;
    }

    else if(password.length<6)
    {
        alert("Password length must be greater than 6");
        return false;
    }
    return true;
}