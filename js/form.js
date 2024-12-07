//This script is authored by Nikolas Misins
let nameComplete = false ; //when the page loads these are false, to indicate that the required fields are not done , the submit button is also disabled on load from the HTML side of this form
let emailComplete = false;

function nameListener() {
	if (document.getElementById("userFirstName").value.length > 2){ //validates that the name is long enough
		nameComplete = true;
		enableButton()
	}else{
		nameComplete = false;
		enableButton()
	}
}

function emailListener(){ //validates that the email adress is inputted correctly and reminds the user if the email is not inputted correctly, will also play a part in enabling the button
	if (	(document.getElementById("userEmail").value.length > 9) && (document.getElementById("userEmail").value.includes("@")) && (document.getElementById("userEmail").value.includes("."))		){
		document.getElementById("emailRemind").innerHTML = "";
		emailComplete = true;
		enableButton()
	}
	else{
		document.getElementById("emailRemind").innerHTML = "*please input a valid email address";
		emailComplete = false;
		enableButton()
	}
}



function enableButton(){ //the function enables or disables the submit button based on the inputs the user has given
	if (	(nameComplete) && (emailComplete)	&&	(document.getElementById("weeklyUpdates").checked || document.getElementById("genNewsletter").checked)		){
		document.getElementById("submitBTN").disabled = false;
	}else{
		document.getElementById("submitBTN").disabled = true;
	}
}
	
function clickedBTN(){ //for UX, so that the user doesnt blindly click the button
	if (document.getElementById("submitBTN").disabled == false){
		alert("Thank you for signing up to our newsletter! You will now be redirected to the home page");
	}
}
