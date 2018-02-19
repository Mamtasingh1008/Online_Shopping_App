
function login_val () {
    var Email = document.getElementById("email").value;
    var Password = document.getElementById("pwd").value;
    /*var Email=document.forms["reg"]["email"].value;
     var Password=document.forms["reg"]["pwd"].value;*/

    if (Email.length == " ") {
        alert("enter email")
        return false;
    }
    else if (Password.length == "") {
        alert("enter password")
       return false;
    }
    else if {
        alert("Registered Successfully");
        return true;
    }

}