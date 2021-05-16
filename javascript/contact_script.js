document.getElementById("dismiss-popup-btn").addEventListener("click",function()
{
	document.getElementsByClassName("popup")[0].classList.remove("active");
});

document.getElementById("open-popup-btn").addEventListener("click",function()
{
	document.getElementsByClassName("popup")[0].classList.add("active");
	document.getElementById("name-value").value = "";
	document.getElementById("phone-value").value = "";
	document.getElementById("email-value").value = "";
	document.getElementById("text-area-value").value = "";
});

function validateText()
{
	alert(/^[a-zA-Z ]+$/ .test(document.getElementById("name-value").value)? 'Congratulations! You entered a valid name.' : 'Sorry, You entered an invalid name. Please try again.');
}

function validateEmail()
{
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var address = document.getElementById("email-value").value;
    if (reg.test(address) == false) 
    {
        alert('Sorry, You entered an invalid email. Please try again.');
        return (false);
    }
    else
    	alert('Congratulations! You entered a valid email.');
}

function validatePhone()
{
	var phoneno = /^\+?([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    var mobileno = /^(\\+91-?)?[0-9]{10}$/;
    var address = document.getElementById("phone-value").value;
    if (phoneno.test(address) == false && mobileno.test(address) == false) 
    {
        alert('Sorry, You entered an invalid Mobile No. Please try again.');
        return (false);
    }
    else
    	alert('Congratulations! You entered a valid Mobile No.');
}