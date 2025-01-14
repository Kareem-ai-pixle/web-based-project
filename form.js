function result()
{
    document.getElementById("e1").innerHTML = "";
    document.getElementById("e2").innerHTML = "";
    document.getElementById("e3").innerHTML = "";
    document.getElementById("e4").innerHTML = "";
    document.getElementById("e5").innerHTML = "";
    document.getElementById("e11").innerHTML = "";
    document.getElementById("e22").innerHTML = "";
    document.getElementById("e33").innerHTML = "";
    document.getElementById("e44").innerHTML = "";
    document.getElementById("e55").innerHTML = "";
    document.getElementById("result11").innerHTML = "";

    var Valid = true;
    var resultText = "";

    var name = document.getElementById("name").value;
    if (name == "") 
    {
        document.getElementById("e1").innerHTML = "Please enter your name.";
        Valid = false;
    } 
    else 
    {
        resultText += "Name: " + name;
        document.getElementById("e11").innerHTML = "Name is valid!!";
    }

    var email = document.getElementById("email").value;
    var at = 0;
    var dot = 0;
    for (var i = 0; i < email.length; i++) 
    {
        if (email[i] == "@") 
        {
            at++;
        }
        else if (email[i] == ".")
        {
            dot++;
        }   
    }
    if (at != 1 || dot < 1 || email[0] == "@" || email[email.length - 1] == "@" || email[email.length - 1] == ".") 
    {
        document.getElementById("e2").innerHTML = "Please enter a valid email.";
        Valid = false;
    } 
    else 
    {
        resultText += "\nEmail: " + email;
        document.getElementById("e22").innerHTML = "Email is valid!!";
    }

    var t = document.getElementById("h").value;
    var lvl = document.getElementsByName("p");
    var TH;
    if (t == "" || t <= 0 || t > 24)
    {
        document.getElementById("e3").innerHTML = "Please enter a valid number.";
        document.getElementById("e4").innerHTML = "Please select your programming level.";
        Valid = false;
    }
    else 
    {
        for (i = 0; i < lvl.length; i++) 
        {
            if (lvl[i].checked) 
            {
                if (lvl[i].value == "BEGINNER") 
                {
                    TH = 80 / t;
                } 
                else if (lvl[i].value == "MEDIUM") 
                {
                    TH = 25 / t;
                } 
                else if (lvl[i].value == "ADVANCED") 
                {
                    TH = 20 / t;
                } 
                else if (lvl[i].value == "PRO") 
                {
                    TH = 13 / t;
                } 
                else if (lvl[i].value == "MASTER") 
                {
                    TH = 30 / t;
                }
                break;
            }
        }
        document.getElementById("e33").innerHTML = "Valid number of hours entered.";
        document.getElementById("e44").innerHTML = "Programming level selected!!";
        resultText += "\nYour training hours: " + TH;
    }

    var checkboxes = document.getElementsByName("pl");
    var selectedCheckbox = [];
    for (var i = 0; i < checkboxes.length; i++) 
    {
        if (checkboxes[i].checked) 
        {
            selectedCheckbox[i] = checkboxes[i].value;
        }
    }
    if (selectedCheckbox.length == 0) 
    {
        document.getElementById("e5").innerHTML = "Please select at least one programming language. ";
        Valid = false;
    } 
    else 
    {
        document.getElementById("e55").innerHTML = "You have successfully selected programming languages.";
        resultText += "\nNext languages to learn: " + selectedCheckbox;
    }

    if (Valid) 
    {
        document.getElementById("result11").innerHTML = "You need " + TH + " days to complete the course.";
        document.getElementById("result2").value = resultText;
    }
}

var interval = setInterval(time); 
function time()
{ 
    var d = new Date();
    document.getElementById("time").innerHTML= d.toLocaleTimeString() + " " + d.getDate() + "-" + (d.getMonth()+1) + "-" + d.getFullYear(); 
}